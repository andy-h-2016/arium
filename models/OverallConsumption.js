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
  fundsBalance: {
    type: Number
  },
  lastAlertedAt: {
    type: Date
  }
}, {
  timestamps: true
});

const OverallConsumption = mongoose.model('OverallConsumption', OverallConsumptionSchema);
module.exports = OverallConsumption;