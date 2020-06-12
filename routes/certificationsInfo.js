const router = require('express').Router();
let certificationInfo = require('../models/certificationInfo.model');

router.route('/add').post((req, res, next) => {
    const CI = new certificationInfo();
    CI._userId = req.body.userId;
    CI.certificateName = req.body.certificateName;
    CI.issuedBy = req.body.issuedBy;
    CI.certificateUrl = req.body.certificateUrl;
    CI.duration = req.body.duration;

    CI.save(function (err) {
      if (err) { return res.status(500).send({ msg: "Error HEre"+err.message }); }
      return res.status(200).send({type:200,msg:"Success",CI:CI})
  });
  });
module.exports = router;