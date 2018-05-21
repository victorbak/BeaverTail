var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String},
    name: {type: String},
    bio: {type: String},
    socialMedia: [{type: String}],
    picture: {type: String},
    role: {type: String},
    newsPosts: [{type: Schema.Types.ObjectId, ref: 'News'}],
    replies: [{
        id: {
            type: Schema.Types.ObjectId, 
            ref: 'Reply'
            },
        news: String
        }]
}, 
{ usePushEach: true }, // ADD THIS
);

module.exports = mongoose.model('User', userSchema)