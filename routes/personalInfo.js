const router = require('express').Router();
let personalInfo = require('../models/personalInfo.model');

router.route('/add').post((req, res, next) => {
    const PI = new personalInfo();
    PI._userId = req.body.userId;
    PI.firstName = req.body.firstName;
    PI.lastName = req.body.lastName;
    PI.gender = req.body.gender;
    PI.phone = req.body.phone;
    PI.profilePic = req.body.profilePic;
    PI.dob = req.body.dob;
    PI.address.houseNo = req.body.houseNo;
    PI.address.locality = req.body.locality;
    PI.address.city = req.body.city;
    PI.address.state = req.body.state;
    PI.address.country = req.body.country;
    PI.address.postCode = req.body.postcode;

    PI.save(function (err) {
      if (err) { return res.status(500).send({ msg: "Error HEre"+err.message }); }
      return res.status(200).send({type:200,msg:"Success",PI:PI})
  });
  });
module.exports = router;