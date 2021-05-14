const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateTerrariumInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.level = data.level ? data.level.toString() : '1';
  data.health = data.health ? data.health.toString() : '0';
  
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required'
  }

  if (!Validator.isInt(data.level, {min: 1, max: 30})) {
    errors.level = 'Level must be an integer from 1 - 30 (inclusive)'
  }

  if (!Validator.isInt(data.health, {min: 0, max: 10})) {
    errors.health = 'Health must be an integer from 0-10 (inclusive)'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}