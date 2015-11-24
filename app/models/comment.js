var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  text: String,
  img_url: String,
  time: Number
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
