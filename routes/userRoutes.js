var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

var User = require('../models/user')

const saltRounds = 10
const tokenTime = 7200
const secret = "It's Kovine, Nigerian! Hehehehe"

//Sign up new user, and sign them in
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
    user.save(function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'Error creating user',
                error: err
            })
        }
        var token = jwt.sign({user: user}, secret, {expiresIn: tokenTime})
        res.status(201).json({
            message: 'User Created',
            obj: user,
            token: token,
            userId: user._id
        })
    })
});

//Sign in user
router.post('/signin', function(req, res, next) {
    User.findOne({username: req.body.username}, function(err, user) {
        //Database error
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        //No user found
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials (username)'}
            })
        }
        //Incorrect password
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials (password)'}
            })
        }
        //Valid signin, return with token
        var token = jwt.sign({user: user}, secret, {expiresIn: tokenTime})
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            obj: user
        })
    })
})

module.exports = router;