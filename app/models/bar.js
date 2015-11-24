var mongoose = require('mongoose'),
    CommentSchema = require('./comment.js').schema;

  var BarSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

var Bar = mongoose.model('Bar', BarSchema);

module.exports = Bar;
