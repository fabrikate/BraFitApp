db = require('../models/index');


// wish list
app.get('/wishlist', function(req, res) {
  console.log('wishlist user is: ', req.session.id);
  db.User.findById(req.session.id).populate('wishList').exec(function(err, data) {
    console.log('data is: ', data);
    res.render('wishlist/index', {user: data})
  });
});

//CREATE
app.get('/wishlist/new', function(req, res) {
  res.render('wishlist/new');
});

app.post('/wishlist', function(req, res) {
  var newStyle = req.body.search;
  console.log(newStyle);
  db.wishList.create({
    brandName: req.body.bra.brand,
    brandStyle: req.body.bra.style,
    size: req.body.bra.size}, function(err, style) {
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

//EDIT
app.get('/wishlist/:id/edit', function(req, res) {
  db.wishList.findById(req.params.id, function(err, data) {
    res.render('wishList/edit', data);
  });
});

app.put('/wishlist/:id', function(req, res) { //TODO: bug, edit creates a new one, not edit an existing id
  db.wishList.findByIdAndUpdate(req.params.id, req.body.bra, function(err, bra) {
    if(err) {
      console.log('Error is: ', err);
    } else {
      res.redirect('/wishlist');
    }
  });
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
      res.redirect('/wishlist');
    }
  })
})
