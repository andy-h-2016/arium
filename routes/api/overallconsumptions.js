const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const OverallConsumption = require('../../models/OverallConsumption');

router.get('/', (req, res) => {
  OverallConsumption.find()
    .then(overallconsumptions => res.json(overallconsumptions))
    .catch(err => res.status(404).json({ nooverallconsumptionsfound: 'No overall consumptions found' }));
});


module.exports = router;