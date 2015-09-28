db = require('../models/index');

// add styles to brand database
app.get('/brandInfo', function (req, res) {
  res.render('brand/index')
})

app.post('/brandInfo', function (req, res) {
  var newBrands = req.body;
  console.log('new brands is: ', newBrands);
  db.Brand.create({brandName:req.body.brand.brandName, popularStyles:req.body.brand.popularStyles});
})
// SEARCH VIA CUSTOM GOOGLE SEARCH
var customSearchId = "AIzaSyAkuDc9QjydzXhntI0U4wdtgHk14t6dH7E&cx="
var url = "https://www.googleapis.com/customsearch/v1?key=" + customSearchId + "011253441330498667417:mrhvtbzrjb8&q="
