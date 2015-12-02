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
    passportRequire = require('./config/passport.js')(passport), //pass passport for ocnfiguration
    cookieParser = require('cookie-parser'),
    configDB = require('./config/database.js'),
    Comment = require('./app/models/comment.js');;

// mongoose.connect(configDB.url); //connect to our database

mongoose.connect('mongodb://localhost/Nighthawkapp', function (err) {
     if (err) {
       console.log(err);
     } else {
       console.log('connection successful');
     }
   });


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



var yelp = new Yelp({
 consumer_key: ,
 consumer_secret: ,
 token: ,
 token_secret: ,
});

  app.use(express.static(__dirname + '/public'));


  app.get('/comment',function (req,res) {
    res.sendfile("public/comments.html");
  });

app.get('/comments', function (req,res) {
  var comments = Comment.find().exec(function(err, comments) {
      if (err) return next(err);
      res.send(comments);
    });;
})

   app.post("/comments", function(req, res) {
     var comment = new Comment(req.body);
     comment.save(function(err) {
       if (err) {
         console.log(err);
       } else {
         res.send(comment)
       }
     });
   });

app.get('/all', function(req, res){
  yelp.search({ term: 'food', location: 'Manhattan' })
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

app.get('/greenwich_village', function(req, res){
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

app.get('/tribeca', function(req, res){
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

app.get('/midtown_west', function(req, res){
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

//Set up the port to listen
app.listen(3000, function () {
console.log('App listening on port 3000...');
});
