const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const WaterTracker = require('../../models/WaterTracker');
const validateWaterTrackerInput = require('../../validation/watertracker');

// Show - get an user's specific water tracker

// router.get('/user/:userId', (req, res) => {
//   WaterTracker.find({ userId: req.params.userId })
//     .then(watertracker => res.json(watertracker))
//     .catch(() => 
//       res.status(404).json({ nowatertrackerfound: "No water tracker for this user" }
//       )
//     );
// });

// // Show - Water Tracker on a terrarium

// router.get('/terrarium/:terrariumId', (req, res) => {
//   WaterTracker.find({ terrariumId: req.params.terrariumId })
//     .then(watertracker => res.json(watertracker))
//     .catch(() =>
//       res.status(404).json({ nowatertrackerfound: "No water tracker for this terrarium" }
//       )
//     );
// });

// Water Tracker show 

router.get('/:userId', (req, res) => {
  WaterTracker.findOne({ _id: req.params.id })
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
      return res.json.status(400).json(errors);
    }

    const newWaterTracker = new WaterTracker({
      total: req.body.total,
      today: req.body.today,
      streak: req.body.streak 
    });

    newWaterTracker.save().then(watertracker => res.json(watertracker));
  }
);

module.exports = router;