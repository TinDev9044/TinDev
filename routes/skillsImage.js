const router = require('express').Router();
let skillsImage = require('../models/skillsImages.model');

router.route('/add').post((req, res, next) => {
    const SkillsImage = new skillsImage();
    SkillsImage.techName= req.body.name;
    SkillsImage.techImage = req.body.image;

    SkillsImage.save(function (err) {
      if (err) { return res.status(500).send({ msg: "Error HEre"+err.message }); }
      return res.status(200).send({type:200,msg:"Success",SkillsImage:SkillsImage})
  });
  });
router.route('/').get((req, res) => {
    skillsImage.find()
      .then(SkillsImage => res.json(SkillsImage))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;