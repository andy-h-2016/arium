const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const WaterTracker = require('../../models/WaterTracker');
const OverallConsumption = require('../../models/OverallConsumption');
const validateWaterTrackerInput = require('../../validation/watertracker');



router.get('/test', (req, res) => res.json({ msg: 'The water tracker router is working' }));

router.get('/user/:user_id', (req, res) => {
  WaterTracker.findOne({ userId: req.params.user_id })
    .then(waterTracker => res.json(waterTracker))
    .catch(err =>
      res.status(404).json({ nowatertrackerfound: "No water tracker found for this user" }
      )
    );
});

// add a show route just for a single water tracker

router.get('/:id', (req, res) => {
  WaterTracker.findOne({ _id: req.params.id })
    .then(waterTracker => res.json(waterTracker))
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

    newWaterTracker.save().then(waterTracker => res.json(waterTracker));
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateWaterTrackerInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const update = {
      total: req.body.total,
      today: req.body.today,
      streak: req.body.streak
    }

    WaterTracker.findByIdAndUpdate(req.params.id, update, { new: true }, (err, waterTracker) => {
      if (err) {
        res.status(400).json(err);
      } else {

        OverallConsumption.find()
          .then(overallConsumptions => {
            grabOverall = overallConsumptions[0]

            const delta = parseInt(req.body.delta) || 0;
            const water = parseInt(grabOverall.water) + delta;
            const fundsGenerated = water / 730;
            const fundsCushion = grabOverall.fundsDonated - fundsGenerated;
            const updateOverall = {
              water,
              fundsGenerated,
              fundsCushion
            }
            console.log('overall', grabOverall);
            console.log('water', grabOverall.water);
            console.log('update', updateOverall);
            
            OverallConsumption.findByIdAndUpdate(grabOverall._id, updateOverall, { new: true }, (err, overallConsumption) => {
                if (err) {
                  console.log(err)
                  res.status(400).json(err);
                } else {
                  let bundle = {
                    waterTracker,
                    overallConsumption
                  }
                  res.json(bundle);
                }
            })
          })
          .catch(err =>
            res.status(404).json({ nooverallconsumptionsfound: 'No overall consumptions found' }
            )
          );
      }
    })
  }
);

module.exports = router;
