const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  password: {
    type: String,
    required: true 
  },
  goal: {
    type: Number,
    required: true
  },
  bio: {
    type: String
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
