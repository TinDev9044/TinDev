const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Personal Information SCHEMA
const qualificationInfoSchema = new Schema({
  _userId: { 
    type: Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' },
  institute: {
    type: String,
    required: true,
    minlength: 3
  },
  course: { 
    type: String,
    required: true,
    minlength: 3
  },
  grade: {
    type: String
  },
  startYear:{
      type: String,
      minlength: 1
  },
  endYear:{
      type:String,
  }
}, {
  timestamps: true,
});

const qualificationInfo = mongoose.model('qualificationInfo', qualificationInfoSchema);
module.exports = qualificationInfo;