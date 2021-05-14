const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const OverallConsumption = require('../../models/OverallConsumption');
const validateOverallConsumptionInput = require('../../validation/overallconsumption');


router.get('/', (req, res) => {
  OverallConsumption.find()
    .then(overallconsumptions => {
      res.json(overallconsumptions)
    })
    .catch(err => 
      res.status(404).json({ nooverallconsumptionsfound: 'No overall consumptions found' }
      )
    );
});

router.post('/',
  passport.authenticate('jwt', { session: false}),
  (req, res) => {
    const { errors, isValid } = validateOverallConsumptionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newOverallConsumption = new OverallConsumption({
      water: 0,
      fundsGenerated: 0,
      fundsDonated: 0,
      fundsBalance: 0 
    });

    newOverallConsumption.save().then(overallconsumption => res.json(overallconsumption));
  }
);

module.exports = router;