var mongoose = require('mongoose')
var Schema = mongoose.Schema

var replySchema = new mongoose.Schema({
    title: {type: String, required: true},
    synopsis: {type: String, required: true},
    tags: [{type: String, required: true}],
    url: {type: String},
    creationDate: {type: Date, default: Date.now},
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    news: {type: Schema.Types.ObjectId, ref: 'News'}
})


replySchema.post('remove', function(news) {
    News.findById(reply.news, function(err, news) {
        New.replies.pull(reply);
        News.save();
    });
})


module.exports = mongoose.model('Reply', replySchema)