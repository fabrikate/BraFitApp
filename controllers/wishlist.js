db = require('../models/index');


// wish list
app.get('/wishlist', function(req, res) {
  res.render('wishlist/index');
})

//CREATE
app.get('/wishlist/new', function(req, res) {
  console.log('req session id is: ', req.session);
  res.render('wishlist/new');
});
app.post('/wishlist', function(req, res) {
  console.log('req.session.id is: ', req.session);
  var newStyle = req.body.search;
  db.wishList.create({
    brandName: req.body.search.brand,
    brandStyle: req.body.search.style,
    size: req.body.search.size}, function(err, style) {
    if(err) {
      console.log(err);
    } else {
      console.log('style is: ',style);
      console.log(req.session.id);
      db.User.findById(req.session.id, function(err, user) {
        user.wishList.push(user);
        style.user = user._id;
        style.save();
        user.save();
        res.redirect('/wishlist', {bras: style});
      })
    }
  })
});
