const express = require('express');
const router = express.Router();
const passport = require('passport');
const Terrarium = require('../../models/Terrarium');
const validateTerrariumInput = require('../../validation/terrarium');

router.get('/test', (req, res) => res.json({msg: 'The terrarium router is working'}));


router.get('/user/:user_id', (req, res) => {
  Terrarium.findOne({userId: req.params.user_id})
    .then(terrarium => res.json(terrarium))
    .catch(err => res.status(404).json({noTerrariumFound: 'No terrarium found for this user'}))
});

router.get('/all',
  passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    const filter = {}; //no filter, return all terrarium documents

    Terrarium.find(filter, (err, terrariums) => {
      if (err) {
        res.status(400).json(errors);
      } else {
        res.json(terrariums)
      }
    });
  }
);

router.post('/',
  passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    const {errors, isValid} = validateTerrariumInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newTerrarium = new Terrarium({
      title: `${req.user.username}'s Terrarium`,
      level: 1,
      lastActiveDate: new Date(),
      userId: req.user.id,
      waterTrackerId: req.body.waterTrackerId
    });

    newTerrarium.save()
      .then(terrarium => res.json(terrarium));
  }
)

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const {errors, isValid} = validateTerrariumInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const update = {
      title: req.body.title,
      level: req.body.level,
      lastActiveDate: req.body.lastActiveDate
    }

    Terrarium.findByIdAndUpdate(req.params.id, update, {new: true}, (err, terrarium) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.json(terrarium)
      }
    })
  }
);


module.exports = router;