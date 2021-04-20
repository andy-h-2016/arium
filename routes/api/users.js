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
      // add lines below @4/19/21 - TS 11:52 PM
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

  // changed to email - feel like username could really be anyone's name
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "Email address already exists!";
        return res.status(400).json(errors);
      } else {
        //need to add validation to see if email is already used. Or do we even need it if Mongoose already has a unique option set?
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          // add this line @4/19/21 - TS 11:52 PM
          goal: req.body.goal
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = { id: user.id, username: user.username };

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

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, username: user.username };

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

// adding route for user to update goals and bio 

// Update User method with the update_user.js portion

router.patch('/updateUser/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    const { errors, isValid } = validateUpdateUserInput(req.body);

    if (!isValid) {
      return res.json.status(400).json(errors);
    }

    var query = { _id: req.params.id}, update = { $set: req.body }, options = { new: true }

    User.findOne(query)
      .then(user => {
        //user._id is an object, not a string. need to convert to string.
        if (user._id.toString() !== req.user.id) {
          res.status(400)
            .json({ edituser: 'This is not your information to edit!' })
        } else {
          User.findOneAndUpdate(query, update, options, (err, user) => {
            if (err) {
              res.status(400).json(err);
            } else {
              res.json(user);
            }
          })
        }
      })
      .catch(() => res.status(404).json({ nouserfound: "No user found with this ID"}))
  }
);

// Update User method without the update_user.js portion

// @JASON: delete this code whenever you want
// router.patch('/patchUser/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
//   let filtered = {_id: req.user.id};
//   let { goal, bio } = req.body;

//   let updatedInfo = {};
//   if (goal) updatedInfo.goal = goal;
//   if (bio) updatedInfo.bio = bio;

//   User.findOneAndUpdate(filtered, {$set: updatedInfo}, {new: true})
//     .then(user => {
//       let updatedUser = {
//         id: user._id,
//         username: req.body.username,
//         email: req.body.email,
//         goal: user.goal,
//         bio: user.bio,
//       }
//       res.json(updatedUser);
//     })
//     .catch(err => res.status(400).json(err));
// });


module.exports = router;

