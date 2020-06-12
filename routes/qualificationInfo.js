const router = require('express').Router();
let qualificationInfo = require('../models/qualificationInfo.model');

router.route('/add').post((req, res, next) => {
    const QI = new qualificationInfo();
    QI._userId = req.body.userId;
    QI.institute = req.body.institute;
    QI.course = req.body.course;
    QI.grade = req.body.grade;
    QI.startYear = req.body.startYear;
    QI.endYear = req.body.endYear;

    QI.save(function (err) {
      if (err) { return res.status(500).send({ msg: "Error HEre"+err.message }); }
      return res.status(200).send({type:200,msg:"Success",QI:QI})
  });
  });
module.exports = router;