const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//USER SCHEMA
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;