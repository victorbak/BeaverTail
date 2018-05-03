var mongoose = require('mongoose')
var Schema = mongoose.Schema

var newsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    synopsis: {type: String, required: true},
    tags: [{type: String, required: true}],
    votes: {type: Number},
    url: {type: String},
    location: {type: String},
    creationDate: {type: Date, default: Date.now},
    dates: [{type: Date}],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    replies: [{type: Schema.Types.ObjectId, ref: 'Reply'}]
})

module.exports = mongoose.model('News', newsSchema)