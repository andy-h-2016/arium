const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateTerrariumInput = require('../../validation/terrarium');


const Terrarium = require('../../models/Terrarium');
//import validation

router.get('/test', (req, res) => res.json({msg: 'The terrarium router is working'}));

router.get('/user/:user_id', (req, res) => {
  Terrarium.findOne({userId: req.params.user_id})
    .then(terrarium => res.json(terrarium))
    .catch(err => res.status(404).json({noTerrariumFound: 'No terrarium found for this user'}))
});

router.post('/',
  passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    const {errors, isValid} = validateTerrariumInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newTerrarium = new Terrarium({
      title: req.body.title,
      level: 1,
      health: 0,
      userId: req.user.id
    });

    newTerrarium.save().then(terrarium => res.json(terrarium));
  }
)



router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const {errors, isValid} = validateTerrariumInput(req.body);

    if (!isValid) {
      return res.status(400),json(errors);
    }

    const update = {
      title: req.body.title,
      level: req.body.level,
      health: req.body.health
    }

    Terrarium.findByIdAndUpdate(req.params.id, update, {new: true})

  }
);


module.exports = router;