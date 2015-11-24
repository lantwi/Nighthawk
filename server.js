var express = require('express'),
    morgan = require('morgan'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    Yelp = require('yelp'),
    request = require('request'),
    http = require('http').Server(app),
    passport = require('passport'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    configDB = require('./config/database.js');

mongoose.connect(configDB.url); //connect to our database

// require('./config/passport')(passport); //pass passport for ocnfiguration

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs'); //ejs for templating

app.use(session({ secret: 'hellohello'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); //use connect-flash for flash messages stored in session

//routes ======================================================
require('./app/routes.js')(app, passport);//load our routes and pass in our app and fully configured passport

   //Set up the port to listen
 app.listen(3000, function () {
 console.log('App listening on port 3000...');
   });


var yelp = new Yelp({
 consumer_key: '8cszeFT7_E4zMENoUzmkuQ',
 consumer_secret: 'zleZtp_5LRJl4O90yKsD4BAIhp4',
 token: 'nnX71q_vcXn3jU8X0O1lMWNFBosUf0TD',
 token_secret: 'BC31sF5RDHI54eORY7PBf0-wVS4',
});

  app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  yelp.search({ term: '', location: 'Manhattan' })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});


app.get('/financial_district', function(req, res){
  yelp.search({ term: 'bars', location: 'financial district', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/chinatown', function(req, res){
  yelp.search({ term: 'bars', location: 'chinatown', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/soho', function(req, res){
  yelp.search({ term: 'bars', location: 'soho', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/lower_east_side', function(req, res){
  yelp.search({ term: 'bars', location: 'lower east side', limit: 10, sort: 2  })
    .then(function (data) {
    // console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/greenwich_village ', function(req, res){
  yelp.search({ term: 'bars', location: 'Greenwich Village', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});
app.get('/east_village', function(req, res){
  yelp.search({ term: 'bars', location: 'east village', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/tribeca ', function(req, res){
  yelp.search({ term: 'bars', location: 'Tribeca', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/gramercy_park', function(req, res){
  yelp.search({ term: 'bars', location: 'Gramercy Park', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/chelsea', function(req, res){
  yelp.search({ term: 'bars', location: 'Chelsea', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/midtown_west ', function(req, res){
  yelp.search({ term: 'bars', location: 'Midtown West', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/midtown_east', function(req, res){
  yelp.search({ term: 'bars', location: 'Midtown East', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/central_park', function(req, res){
  yelp.search({ term: 'bars', location: 'Central Park', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/east_village', function(req, res){
  yelp.search({ term: 'bars', location: 'east village', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/upper_west_side', function(req, res){
  yelp.search({ term: 'bars', location: 'Upper West Side', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});


app.get('/upper_east_side', function(req, res){
  yelp.search({ term: 'bars', location: 'Upper East Side', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/harlem', function(req, res){
  yelp.search({ term: 'bars', location: 'Harlem', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/inwood', function(req, res){
  yelp.search({ term: 'bars', location: 'Inwood', limit: 10, sort: 2  })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});

app.get('/washington_heights', function(req, res){
  yelp.search({ term: 'bars', location: 'washington heights', limit: 10, sort: 2 })
    .then(function (data) {
    console.log(data);
    res.send(data)
  })
  .catch(function (err) {
    console.error(err);
  });
});





// // See http://www.yelp.com/developers/documentation/v2/search_api
// yelp.search({ term: 'food', location: 'Montreal' })
// .then(function (data) {
//  console.log(data);
// })
// .catch(function (err) {
//  console.error(err);
// });
//
// // See http://www.yelp.com/developers/documentation/v2/business
// yelp.business('yelp-san-francisco')
//  .then(console.log)
//  .catch(console.error);
//
// yelp.phoneSearch({ phone: '+15555555555' })
//  .then(console.log)
//  .catch(console.error);
//
// // A callback based API is also available:
// yelp.business('yelp-san-francisco', function(err, data) {
//  if (err) return console.log(error);
//  console.log(data);
// });
