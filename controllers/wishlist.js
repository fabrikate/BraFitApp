db = require('../models/index');
// wish list
app.get('/wishlist', routeMiddleware.ensureLoggedIn, function(req, res) {
  db.User.findById(req.session.id).populate('wishList').exec(function(err, data) {
    res.render('wishlist/index', {user: data})
  });
});

//CREATE
app.get('/wishlist/new', function(req, res) {
  res.render('wishlist/new');
});

app.post('/wishlist', function(req, res) {
  var newStyle = req.body.search;
  db.wishList.create({
    brandName: req.body.bra.brand,
    brandStyle: req.body.bra.style,
    size: req.body.bra.size}, function(err, style) {
    if(err) {
    } else {
      db.User.findById(req.session.id, function(err, user) {
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
    res.render('wishlist/edit', data);
  });
});

app.put('/wishlist/:id', function(req, res) {
  console.log('put! works');
  console.log('req.body.bra is: ', req.body.bra);
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
  db.wishList.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.redirect('404');
    }
    else {
      res.redirect('/wishlist');
    }
  })
})

//SEARCH VIA NORDSTROM
app.get('/wishlist/search', function(req, res) {
  var search = req.query.searchNordy;
  console.log('request query: ', req.query.searchNordy);
  var url = "http://shop.nordstrom.com/sr?origin=keywordsearch&contextualcategoryid=0&keyword=" + search;
  request.get(url, function (err, resp, body) {
    console.log('Json parsed body: ', body);
  })
  res.render('wishlist/searchResults');
})
