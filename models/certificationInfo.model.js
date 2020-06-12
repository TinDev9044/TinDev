const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Certificate Information SCHEMA
const certificateInfoSchema = new Schema({
  _userId: { 
    type: Schema.Types.ObjectId, 
    required: true, 
    ref: 'User'
 },
    certificateName: {
    type: String,
    required: true,
    minlength: 3
  },
  issuedBy: { 
    type: String,
    required: true,
    minlength: 3
  },
  certificateUrl: {
    type: String,
    minlength: 4
  },
  duration:{
      type: String,
      minlength: 1
  }
}, {
  timestamps: true,
});

const certificateInfo = mongoose.model('certificateInfo', certificateInfoSchema);
module.exports = certificateInfo;