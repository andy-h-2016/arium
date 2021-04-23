const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUpdateUserInput(data) {
  let errors = {};

  data.bio = validText(data.bio) ? data.bio : '';
  data.goal = (data.goal) ? data.goal.toString() : '0' ;

  if (data.bio && !Validator.isLength(data.bio, { max: 150 })) {
    errors.bio = "Bio must be between 1 & 150 characters.";
  }

  if (data.goal && !Validator.isInt(data.goal, {min: 1, max: 10})) {
    errors.goal = "Goal must be between 1 & 10";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
