const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const WaterTracker = require('../../models/WaterTracker');

// Show - get an user's specific water tracker

router.get('/user/:userId', (req, res) => {
  WaterTracker.find({ userId: req.params.userId })
    .then(watertracker => res.json(watertracker))
    .catch(() => 
      res.status(404).json({ nowatertrackerfound: "No water tracker for this user" }
      )
    );
});

// Show - Water Tracker on a terrarium

router.get('/terrarium/:terrariumId', (req, res) => {
  WaterTracker.find({ terrariumId: req.params.terrariumId })
    .then(watertracker => res.json(watertracker))
    .catch(() =>
      res.status(404).json({ nowatertrackerfound: "No water tracker for this terrarium" }
      )
    );
});