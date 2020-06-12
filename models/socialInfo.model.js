const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Personal Information SCHEMA
const socailInfoSchema = new Schema({
  _userId: { 
    type: Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' },
  linkedin: {
    type: String,
    minlength: 3
  },
  website: { 
    type: String,
    minlength: 3
  },
  facebook: {
    type: String,
    minlength: 4
  },
  twitter:{
      type: String,
      minlength: 3
  },
  quora:{
      type:String,
  },
  skype:{
    type: String,
    minlength: 3
  },
  github:{
    type: String,
    minlength: 3
  },
  stackoverflow:{
    type: String,
    minlength: 3
  },
  medium:{
    type: String,
    minlength: 3
  },
  instagram:{
    type: String,
    minlength: 3
  }
}, {
  timestamps: true,
});

const socailInfo = mongoose.model('socailInfo', socailInfoSchema);
module.exports = socailInfo;