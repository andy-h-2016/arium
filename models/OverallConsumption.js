const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OverallConsumptionSchema = new Schema({
  OverallConsumption: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
});

const OverallConsumption = mongoose.model('OverallConsumption', OverallConsumptionSchema);
module.exports = OverallConsumption;