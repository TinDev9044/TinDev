const router = require('express').Router();
let skillsInfo = require('../models/skillsInfo.model');

router.route('/add').post((req, res, next) => {
    const SK = new skillsInfo();
    SK._userId = req.body.userId;
    SK.skill = req.body.skill;
    SK.save(function (err) {
      if (err) { return res.status(500).send({ msg: "Error HEre"+err.message }); }
      return res.status(200).send({type:200,msg:"Success",SK:SK})
  });
  });
router.route('/:id').get((req, res) => {
    skillsInfo.findOne({ Id: req.params.id}, function (err, skill) {
        if (!skill) return res.status(500).send({type: 500, msg: 'No skill found with this id' });
        return(res.status(200).send({ type:200,Skill:skill,msg: "This is the skill" }));
    });
  });
router.route('/').get((req, res) => {
    skillsInfo.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;