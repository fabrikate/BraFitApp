// size survey routes
app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname + '../../views/layouts/index.html'));
});

app.post('/survey', function(req, res) {
  test = req.body;
  console.log('app.post/survey re.body is: ', test);
});

app.get('/size/:size', function(req, res) {
  var userSize = req.params.size;
  console.log('get ', userSize);
  res.render('survey/style');
})

app.post('/size/:size', function(req, res) {
  var userSize = req.params.size;
  console.log('post ', userSize);
  console.log('user is: ', req.session);
  db.User.findById(req.session.id, function(err, user) {
    user.braSize.push(userSize);
    user.save();
  })
})
