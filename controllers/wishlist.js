db = require('../models/index');


// wish list
app.get('/wishlist', function(req, res) {
  db.User.findById(req.session.id, function (err, user) {
    if (err) {
      console.log('Error is: ', err);
    } else {
      console.log('user is: ', user);
      console.log('user.wishlist is: ', user.wishList);
      wishlistId = user.wishList[0];
      db.wishList.findById(wishlistId, function(err, data) {
        console.log(data)
        res.render('wishlist/index', {userName: user.email, bras: data});
      });
    }
  })
})

//CREATE
app.get('/wishlist/new', function(req, res) {
  res.render('wishlist/new');
});

app.post('/wishlist', function(req, res) {
  var newStyle = req.body.search;
  console.log(newStyle);
  db.wishList.create({
    brandName: req.body.search.brand,
    brandStyle: req.body.search.style,
    size: req.body.search.size}, function(err, style) {
    if(err) {
      console.log(err);
    } else {
      db.User.findById(req.session.id, function(err, user) {
        console.log('style is: ', style);
        user.wishList.push(style);
        style.user = user._id;
        style.save();
        user.save();
        res.redirect('/wishlist');
      })
    }
  })
});

// DELETE
app.delete('/wishlist/:id', function(req, res) {
  console.log(req.params.id)
  console.log(req.query)
  db.wishList.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.redirect('404');
    }
    else {
      res.redirect('/wishlist', {bras: style});
    }
  })
})
