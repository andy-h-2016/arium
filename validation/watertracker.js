const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateWaterTrackerInput(data) {
  let errors = {};

  // data.userId = validText(data.userId) ? data.userId : "";
  // data.terrariumId = validText(data.terrariumId) ? data.terrariumId : "";


  if (Validator.isEmpty(data.total)) {
    errors.total = "Total amount of cups field is required"
  }

  if (!Validator.isInt(data.total)) {
    errors.total = "Total cups of water drank since using our app must be an integer!";
  }

  if (Validator.isEmpty(data.today)) {
    errors.today = "Amount of water drank today field is required"
  }

  if (!Validator.isInt(data.today, {max: 10})) {
    errors.today = "Cups of water drank today cannot be greater than 10, you'll die";
  }

  if (Validator.isEmpty(data.streak)) {
    errors.streak = "Streak field is required"
  }

  if (!Validator.isInt(data.streak)) {
    errors.streak = "Meeting your goal streak must be an integer!";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}