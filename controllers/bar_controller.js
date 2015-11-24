var mongoose = require('mongoose'),
  Bar = require('.../models/bar.js');

module.exports.controller = function(app) {
  //Artists- INDEX
  app.get("/lower_east_side", function(req, res) {
    Bar.find().populate('comment').exec(function(err, bars) {
      if (err) return next(err);
      res.send(bars);
    });
  });

  //Artist- SHOW
  app.get("/lower_east_side/:id", function(req, res) {
    Bar.findById(req.params.id)
      .populate('comment').exec(function(err, bar) {
        res.send(bar);
      });
  });
};
