const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TerrariumSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  // instead of setting min and max, 
  // we will validate it in validations for levels&health
  level: {
    type: Number,
    required: true 
  },
  health: {
    type: Number,
    required: true 
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
}, {
  timestamps: true 
});

const Terrarium = mongoose.model('Terrarium', TerrariumSchema);
module.exports = Terrarium;