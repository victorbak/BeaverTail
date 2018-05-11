var express = require('express');
var router = express.Router();
var News = require('../models/news');

//Gets all news
router.get('/', function(req, res, next) {
    News.find()
    .exec(function(err, news) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        
        res.status(200).json({
            message: 'Success: All',
            obj: news
        })
    });
});

//Gets 10 most recent posts
router.get('/new', function(req, res, next) {
    News.find({}).sort({creationDate: -1}).limit(10)
    .exec(function(err, news) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        console.log("New")
        res.status(200).json({
            message: 'Success: New',
            obj: news
        })
    });
});

//Gets 10 most popular posts
router.get('/popular', function(req, res, next) {
    News.find({}).sort({creationDate: -1}).limit(10)
    .exec(function(err, news) {
        if (err) {
            return res.status(500).json({
                title: 'An esrror occured',
                error: err
            });
        }
        console.log("Popular")
        res.status(200).json({
            message: 'Success: Popular',
            obj: news
        })
    });
});

//gets a news by id
router.get('/:id', function(req, res, next) {
    News.findById(req.params.id)
    .exec(function(err, news) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: news
        })
    });
});

//post a news story
router.post('/', function(req, res, next) {
    var news = new News({
        title: req.body.title,
        synopsis: req.body.synopsis,
        tags: req.body.synopsis,
        replyCount: req.body.replyCount,
        url: req.body.url,
        location: req.body.location,
        creationDate: req.body.creationDate,
        dates: req.body.dates,
    });
    news.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                message: 'An error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'News Saved',
            obj: result
        })
    })
})

module.exports = router;