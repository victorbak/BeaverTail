var mongoose = require('mongoose')
var Schema = mongoose.Schema

var User = require('./user');

var newsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    synopsis: {type: String, required: true},
    tags: [{type: String, required: true}],
    replyCount: {type: Number},
    url: {type: String},
    longitude: {type: Number},
    latitude: {type: Number},
    creationDate: {type: Date, default: Date.now},
    dates: [{type: Date}],
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    replies: [{type: Schema.Types.ObjectId, ref: 'Reply'}]
},
{ usePushEach: true }, // ADD THIS
);

newsSchema.post('remove', function(news) {
    User.findById(news.user.id, function(err, user) {
        user.newsPosts.pull(news);
        user.save();
    });
})

module.exports = mongoose.model('News', newsSchema)