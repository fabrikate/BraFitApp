app.get('/', function(req, res) {
  res.redirect('/wishlist');
});
require('./size');
require('./brand');

//sign up routes
app.get('/signup', routeMiddleware.preventLoginSignup, function(req, res) {
  res.render('signup') //TODO: When they sign up where do they go
});
app.post('/signup', function(req, res) {
  var newUser = req.body.user;
  db.User.create(newUser, function(err, user) {
    if(user) {
      req.login(user);
      res.redirect('signup') //TODO: When they are signedup and logined where do they go
    } else {
      res.render
    }
  });
});

//login routes
app.get('/login', routeMiddleware.preventLoginSignup, function(req, res) {
  res.render('login');
});
app.post('/login', function(req, res) {
  db.User.authenticate(req.body.user, function(err, user) {
    if(!err && user !== null) {
      req.login(user);
      res.redirect('/wishlist');
    } else {
      res.render('login', console.log('Error is: ', err));
    }
  });
});

//log out route
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

//404 wildcard route
app.get('*', function(req, res) {
  res.render('404');
});
