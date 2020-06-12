const router = require('express').Router();
let socialInfo = require('../models/socialInfo.model');

router.route('/add').post((req, res, next) => {
    const SI = new socialInfo();
    SI._userId = req.body.userId;
    SI.linkedin = req.body.linkedin;
    SI.website = req.body.website;
    SI.facebook = req.body.facebook;
    SI.twitter = req.body.twitter;
    SI.quora = req.body.quora;
    SI.skype = req.body.skype;
    SI.github = req.body.github;
    SI.stackoverflow = req.body.stackoverflow;
    SI.medium = req.body.medium;
    SI.instagram = req.body.instagram;

    SI.save(function (err) {
      if (err) { return res.status(500).send({ msg: "Error HEre"+err.message }); }
      return res.status(200).send({type:200,msg:"Success",SI:SI})
  });
  });
module.exports = router;