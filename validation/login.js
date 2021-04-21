const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : '';
  data.password = validText(data.password) ? data.password : '';

  // Easier to validate method with isEmail method than username,
  // think we should choose to use email to login instead of handle

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
