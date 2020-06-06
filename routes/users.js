//Contains all the api links manually created for /users

const router = require('express').Router();
let User = require('../models/user.model');
let Token = require('../models/schema.model');
var crypto = require('crypto');
var nodemailer = require('nodemailer');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({email,password});

  newUser.save(function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }

    // Create a verification token for this user
    var token = new Token({ _userId: newUser._id, token: crypto.randomBytes(16).toString('hex') });

    // Save the verification token
    token.save(function (err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
        // Send the email
        var transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'tindev9044@gmail.com', pass: 'Abcd@1234' } });
        var mailOptions = { from: 'tindev9044@gmail.com', to: email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
        transporter.sendMail(mailOptions, function (err) {
            if (err) { 
              console.log(err);
              return res.status(500).send({ msg: err.message }); }
            res.status(200).send('A verification email has been sent to ' + email + '.');
        });
    });
});
});



module.exports = router;