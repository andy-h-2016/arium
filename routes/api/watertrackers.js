const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const WaterTracker = require('../../models/WaterTracker');
const validateWaterTrackerInput = require('../../validation/watertracker');

// Water Tracker show for a specific user

router.get('/test', (req, res) => res.json({ msg: 'The water tracker router is working' }));

router.get('/user/:user_id', (req, res) => {
  WaterTracker.findOne({ userId: req.params.user_id })
    .then(watertracker => res.json(watertracker))
    .catch(err =>
      res.status(404).json({ nowatertrackerfound: "No water tracker found for this user" }
      )
    );
});

// add a show route just for a single water tracker @ 4/21/21

router.get('/:id', (req, res) => {
  WaterTracker.findOne({ _id: req.params.id })
    .then(watertracker => res.json(watertracker))
    .catch(err =>
      res.status(404).json({ nowatertrackerfound: "No water tracker found with this ID" }
      )
    );
});

router.post('/', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateWaterTrackerInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newWaterTracker = new WaterTracker({
      total: 0,
      today: 0,
      streak: 0,
      userId: req.user.id
    });

    newWaterTracker.save().then(watertracker => res.json(watertracker));
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateWaterTrackerInput(req.body);

    if (!isValid) {
      return res.status(400), json(errors);
    }
    const update = {
      total: req.body.total,
      today: req.body.today,
      streak: req.body.streak
    }
   

    WaterTracker.findByIdAndUpdate(req.params.id, update, { new: true }, (err, watertracker) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json(watertracker);
      }
    })
  }
);

module.exports = router;