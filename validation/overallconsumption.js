const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateOverallConsumptionInput(data) {
  let errors = {};

  data.water = (data.water) ? data.water.toString() : '0';
  data.fundsGenerated = (data.fundsGenerated) ? data.fundsGenerated.toString() : '0';
  data.fundsDonated = (data.fundsDonated) ? data.fundsDonated.toString() : '0';
  data.fundsBalance = (data.fundsBalance) ? data.fundsBalance.toString() : '0';

  if (data.water && !Validator.isInt(data.water, { min: 0 })) {
    errors.water = 'Overall consumption cannot be lower than 0';
  }

  if (data.fundsGenerated && !Validator.isInt(data.fundsGenerated, { min: 0 })) {
    errors.fundsGenerated = 'Funds Owed cannot be lower than 0';
  }

  if (data.fundsDonated && !Validator.isInt(data.fundsDonated, { min: 0 })) {
    errors.fundsDonated = 'Funds donated cannot be lower than 0';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};