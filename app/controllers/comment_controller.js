// var mongoose = require('mongoose'),
//   Comment = require('../app/models/comment.js');
//
// module.exports.controller = function(app) {
//   // INDEX
//   app.get("/comments", function(req, res) {
//     Comment.find().exec(function(err, comments) {
//       if (err) return next(err);
//       res.send('hi');
//     });
//   });
//
//   //SHOW
//   app.get("/comments/:id", function(req, res) {
//     Comment.findById(req.params.id).exec(function(err, comment) {
//         res.send(comment)
//       });
//   });
//
//   // CREATE
//   app.post("/comments", function(req, res) {
//     var comment = new Comment(req.body);
//     comment.save(function(err) {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(comment)
//       }
//     });
//   });
//
//   //UPDATE
//   app.put("/comments/:id", function(req, res) {
//     Comment.findOneAndUpdate({
//       _id: req.params.id
//     }, {
//       $set: req.body
//     }, function(err, comment) {
//       res.send(comment);
//     });
//   });
//
//   //DELETE
//   app.delete("/comments/:id", function(req, res) {
//     Comment.findOneAndRemove({_id: req.params.id}, function (err) {
//       if(err) console.log(err);
//       console.log("Comment deleted");
//       res.send('Comment deleted');
//     });
//   });
// }
