
var mongoose = require('mongoose');


var CommentSchema = mongoose.Schema({
 name: String,
 text: String,
 createdAt: Date,
 bar: String
});

var Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment;
