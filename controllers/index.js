// controllers - index. Signup, Login and Logout route
app.get('/', function(req, res) {
  res.redirect('/wishlist');
});
require('./size');
require('./brand');

//sign up routes
app.get('/signup', routeMiddleware.preventLoginSignup, function(req, res) {
  res.render('user/signup')
});
app.post('/signup', function(req, res) {
  var newUser = req.body.user;
  db.User.create(newUser, function(err, user) {
    if(user) {
      req.login(user);
      res.redirect('login')
    } else {
      res.render('user/signup')
    }
  });
});

//login routes
app.get('/login', routeMiddleware.preventLoginSignup, function(req, res) {
  res.render('user/login');
});
app.post('/login', function(req, res) {
  db.User.authenticate(req.body.user, function(err, user) {
    if(!err && user !== null) {
      req.login(user);
      res.redirect('/wishlist');
    } else {
      res.render('user/login', console.log('Error is: ', err));
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
