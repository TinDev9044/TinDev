const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Personal Information SCHEMA
const personalInfoSchema = new Schema({
  _userId: { 
    type: Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' },
  firstName: {
    type: String,
    required: true,
    minlength: 3
  },
  lastName: { 
    type: String,
    required: true,
    minlength: 3
  },
  gender: {
    type: String,
    required: true,
    minlength: 4
  },
  phone:{
      type: String,
      minlength: 10
  },
  profilePic:{
      type:String,
  },
  dob:{
      type:String,
      minlength:9,
      required: true,
      maxlength:10
  },
  address:{
      houseNo:{
          type:String
      },
      locality:{
          type:String,
          required: true
      },
      city:{
          type:String,
          required: true
      },
      state:{
            type:String,
            required: true
      },
      country:{
          type:String,
          required: true
      },
      postCode:{
          type:String,
          required: true
      }
  }
}, {
  timestamps: true,
});

const personalInfo = mongoose.model('personalInfo', personalInfoSchema);
module.exports = personalInfo;