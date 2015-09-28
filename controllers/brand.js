db = require('../models/index');

// add styles to brand database
app.get('/brandInfo', function (req, res) {
  db.Brand.find({}, function(err, brands) {
    if(err) {
      console.log('Error is: ', err);
    } else {
      console.log(brands);
      res.render('brand/index', {brand: brands})

    }
  })
})


// SEARCH VIA CUSTOM GOOGLE SEARCH
var customSearchId = "AIzaSyAkuDc9QjydzXhntI0U4wdtgHk14t6dH7E&cx="
var url = "https://www.googleapis.com/customsearch/v1?key=" + customSearchId + "011253441330498667417:mrhvtbzrjb8&q="
