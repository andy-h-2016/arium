const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateUpdateUserInput = require('../../validation/update_user');

router.get('/test', (req, res) => res.json({msg: "The users' router is working"}));

router.get('/current', 
  passport.authenticate('jwt', {session: false}), 
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
      goal: req.user.goal,
      bio: req.user.bio
    })
  }
)

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "Email address already exists!";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          goal: req.body.goal
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = { id: user.id, username: user.username, goal: user.goal };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
});


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }).then(user => {
    if (!user) {
      errors.username = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, username: user.username, email: user.email, goal: user.goal};

          jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Incorrect password";
          return res.status(400).json(errors);
        }
      });
  });
});

router.get('/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with this ID" }
      )
    );
});

router.patch('/updateUser/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateUpdateUserInput(req.body);
  
  if (!isValid) {
      return res.json.status(400).json(errors);
    }

    let goal = req.body.goal;

    let updateInfo = {};
    if (goal) updateInfo.goal = goal;

    let query = { _id: req.params.id};
    let update = { $set: updateInfo };
    let options = { new: true };

    User.findOne(query)
      .then(user => {
        if (user._id.toString() !== req.user.id) {
          res.status(400)
            .json({ edituser: 'This is not your information to edit!' })
        } else {
          User.findOneAndUpdate(query, update, options, (err, user) => {
            if (err) {
              res.status(400).json(err);
            } else {  
              const payload = { id: user.id, username: user.username, email: user.email, goal: user.goal}
              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            }
          });
        }
      })
      .catch(() => res.status(404).json({ nouserfound: "No user found with this ID"}))
  }
);

module.exports = router;

