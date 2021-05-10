const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OverallConsumptionSchema = new Schema({
  water: {
    type: Number,
    required: true
  },
  fundsGenerated: {
    type: Number
  },
  fundsDonated: {
    type: Number
  },
  fundsCushion: {
    type: Number
  }
}, {
  timestamps: true
});

const OverallConsumption = mongoose.model('OverallConsumption', OverallConsumptionSchema);
module.exports = OverallConsumption;