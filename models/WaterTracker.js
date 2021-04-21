const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaterTrackerSchema = new Schema ({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  // comment to switch onto Terrarium Model
  // terrariumId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "terrariums"
  // },
  // tracks total cups of water drank since using our app
  total: {
    type: Number,
    required: true 
  },
  // tracks cups of water drank in a day.
  today: {
    type: Number,
    required: true
  },
  // total days in a row you met your goal
  streak: {
    type: Number,
    required: true
  },
}, {
  timestamps: true 
});

const WaterTracker = mongoose.model('WaterTracker', WaterTrackerSchema);
module.exports = WaterTracker;