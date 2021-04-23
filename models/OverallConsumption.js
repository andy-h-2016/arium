const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OverallConsumptionSchema = new Schema({
  overall: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
});

const OverallConsumption = mongoose.model('OverallConsumption', OverallConsumptionSchema);
module.exports = OverallConsumption;