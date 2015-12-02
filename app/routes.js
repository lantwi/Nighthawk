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
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/login', // redirect back to the signup page if there is an error
  }));


// =====================================
// SIGNUP
// =====================================

  app.get('/signup', function (req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') })

})  ;

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/login',
    failureRedirect : '/signup',
  }));

// =====================================
 // PROFILE SECTION
 // =====================================

  app.get('/profile', isLoggedIn, function (req, res) {
    res.render('nighthawk.ejs', {
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
