var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

var User = require('../models/user')

const saltRounds = 10

//Sign up new user
router.post('/', function (req, res, next) {
    var user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, saltRounds),
        email: req.body.email,
        name: req.body.name,
        bio: req.body.bio,
        socialMedia: req.body.socialMedia,
        picture: req.body.picture,
        role: 'User',
    })
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Error creating user',
                error: err
            })
        }
        res.status(201).json({
            message: 'User Created',
            obj: result
        })
    })
});

module.exports = router;