module.exports = function (app, passport) {
    // =====================================
    // HOME PAGE (with login links)
    // =====================================
  app.get('/', function (req, res) {
    res.render('index.ejs');//load the index.ejs file
  });


  // =====================================
 // LOGIN
 // =====================================
 // show the login form

  app.get('/login', function (req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage')})
  });

  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));


// app.post('/login', do all our passport stuff here);

// =====================================
// SIGNUP
// =====================================

  app.get('/signup', function (req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage')})

})  ;

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash    : true
  }));

// =====================================
 // PROFILE SECTION
 // =====================================
 // we will want this protected so you have to be logged in to visit
 // we will use route middleware to verify this (the isLoggedIn function)

  app.get('/profile', isLoggedIn, function (req, res) {
    res.render('profile.ejs', {
      user : req.user //get the user out of session and pass to template
    });
  });

  // =====================================
// LOGOUT
// =====================================

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

};


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  //if they aren't redirect them to the home PAGE
  res.redirect('/');
}
