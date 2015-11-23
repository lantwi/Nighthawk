var express = require('express'),
   logger = require('morgan'),
   session = require('express-session'),
   bodyParser = require('body-parser'),
   mongoose = require('mongoose'),
   app = express(),
   Yelp = require('yelp'),
   request = require('request'),
   http = require('http').Server(app);

var yelp = new Yelp({
 consumer_key: process.env.consumer_key,
 consumer_secret: process.env.consumer_secret,
 token: process.env.token,
 token_secret: process.env.token_secret
});

app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  yelp.search({ term: 'food', location: 'Manhattan' })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

   //Set up the port to listen
app.listen(3000, function () {
 console.log('App listening on port 3000...');
   });





// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
 console.log(data);
})
.catch(function (err) {
 console.error(err);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business('yelp-san-francisco')
 .then(console.log)
 .catch(console.error);

yelp.phoneSearch({ phone: '+15555555555' })
 .then(console.log)
 .catch(console.error);

// A callback based API is also available:
yelp.business('yelp-san-francisco', function(err, data) {
 if (err) return console.log(error);
 console.log(data);
});
