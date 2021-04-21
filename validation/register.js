const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.goal = (data.goal) ? data.goal.toString() : '0' ;
  data.bio = validText(data.bio) ? data.bio : '';
  
  if (!Validator.isLength(data.username, { min: 2, max: 30 })) {
    errors.username = 'username must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (Validator.isEmpty(data.goal)) {
    errors.goal = "Goal field is required";
  }

  if (!Validator.isInt(data.goal, {min: 1, max: 10})) {
    errors.goal = "Goal must be between 1 & 10";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
