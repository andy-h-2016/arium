const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateWaterTrackerInput(data) {
  let errors = {};

  data.userId = validText(data.userId) ? data.userId : "";
  data.total = data.total ? data.total.toString() : "0";
  data.today = data.today ? data.today.toString() : "0";
  data.streak = data.streak ? data.streak.toString() : "0";

  if (Validator.isEmpty(data.total)) {
    errors.total = "Total amount of cups field is required"
  }

  if (!Validator.isInt(data.total, { min: 0 })) {
    errors.total = "Total cups of water drank since using our app must be an integer!";
  }

  if (Validator.isEmpty(data.today)) {
    errors.today = "Amount of water drank today field is required"
  }

  if (!Validator.isInt(data.today, {min: 0, max: 10})) {
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