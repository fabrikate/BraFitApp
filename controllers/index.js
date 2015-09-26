require('./size');
require('./brand');
require('./wishlist');
// controllers - index. Signup, Login and Logout route
app.get('/', function(req, res) {
  console.log(req.body);
  res.redirect('/wishlist');
});

//sign up routes
app.get('/signup', routeMiddleware.preventLoginSignup, function(req, res) {
  res.render('user/signup')
});
app.post('/signup', function(req, res) {
  var newUser = req.body.user;
  console.log(newUser);
  db.User.create(newUser, function(err, user) {
    if(user) {
      req.login(user);
      res.redirect('/wishlist')
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
  console.log('login post route');
  db.User.authenticate(req.body.user, function(err, user) {
    if(!err && user !== null) {
      req.login(user);
      console.log('user is: ',user);
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
