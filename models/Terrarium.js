const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TerrariumSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
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
  waterTrackerId: {
    type: Schema.Types.ObjectId,
    ref: "watertrackers"
  },
}, {
  timestamps: true 
});

const Terrarium = mongoose.model('Terrarium', TerrariumSchema);
module.exports = Terrarium;