const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateOverallConsumptionInput(data) {
  let errors = {};

  data.overall = (data.overall) ? data.overall.toString() : '0';

  if (data.overall && !Validator.isInt(data.overall, { min: 0 })) {
    errors.overall = 'Overall consumption cannot be lower than 0';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};