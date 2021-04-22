const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const OverallConsumption = require('../../models/OverallConsumption');
const validateOverallConsumptionInput = require('../../validation/overallconsumption');


router.get('/', (req, res) => {
  OverallConsumption.find()
    .then(overallconsumptions => res.json(overallconsumptions))
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
      overall: 0
    });

    newOverallConsumption.save().then(overallconsumption => res.json(overallconsumption));
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateOverallConsumptionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const updateOverall = {
      overall: overall + req.body.delta
    }
    
    // update params id with the set id of the only table
    OverallConsumption.findByIdAndUpdate(`6081ce4fb9d40505b0855b8c`, updateOverall, { new: true }, (err, overallconsumption) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.json(overallconsumption);
      }
    });
  }
)

// const grabOverall = OverallConsumption.findOne({ _id: `6081ce4fb9d40505b0855b8c` })



module.exports = router;