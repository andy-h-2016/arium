const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const WaterTracker = require('../../models/WaterTracker');
const validateWaterTrackerInput = require('../../validation/watertracker');

// Water Tracker show 

router.get('/:userId', (req, res) => {
  console.log(req.params)
  WaterTracker.findOne({ userId: req.params.userId })
    .then(watertracker => res.json(watertracker))
    .catch(() =>
      res.status(404).json({ nowatertrackerfound: "No water tracker found with this user" }
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

module.exports = router;