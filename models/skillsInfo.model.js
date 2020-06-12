const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Personal Information SCHEMA
const skillsInfoSchema = new Schema({
  _userId: { 
    type: Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' 
  },
  skill: {
    type: {},
    required: true
  }
}, {
  timestamps: true,
});

const skillsInfo = mongoose.model('skillsInfo', skillsInfoSchema);
module.exports = skillsInfo;