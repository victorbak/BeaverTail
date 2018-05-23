var mongoose = require('mongoose')
var Schema = mongoose.Schema

var replySchema = new mongoose.Schema({
    title: {type: String, required: true},
    synopsis: {type: String, required: true},
    tags: [{type: String, required: true}],
    verify: {type: String},
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
},
{ usePushEach: true }, // ADD THIS
)


replySchema.post('remove', function(reply) {
    News.findById(reply.news, function(err, news) {
        news.replies.pull(reply);
        news.save();
    });
})


module.exports = mongoose.model('Reply', replySchema)