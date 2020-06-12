const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Personal Information SCHEMA
const skillsImageSchema = new Schema({
  techName: {
    type: String,
    required: true
  },
  techImage: { 
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

const skillsImage = mongoose.model('skillsImage', skillsImageSchema);
module.exports = skillsImage;