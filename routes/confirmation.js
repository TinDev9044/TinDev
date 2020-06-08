const router = require('express').Router();
let User = require('../models/user.model');
let Token = require('../models/schema.model');

router.route('/').post((req, res, next) => {
    const otp = req.body.otp;
    Token.findOne({ token: otp }, function (err, token) {
        if (!token) return res.status(400).send({ type: 500, msg: 'We were unable to find a valid token. Your token my have expired.' });
 
        // If we found a token, find a matching user
        User.findOne({ _id: token._userId}, function (err, user) {
            if (!user) return res.status(500).send({type: 500, msg: 'We were unable to find a user for this token.' });
            if (user.isVerified) return res.status(400).send({ type: 400, msg: 'This user has already been verified.' });
 
            // Verify and save the user
            user.isVerified = true;
            user.save(function (err) {
                if (err) { return res.status(500).send({  type: 400,msg: err.message }); }
                return(res.status(200).send({ type:200,user:user,msg: "Your account has been verified." }));
            });
        });
    });
});
module.exports = router;