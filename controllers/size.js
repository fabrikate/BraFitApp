// size survey routes
app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname + '../../views/layouts/index.html'));
  test = req.body
  console.log(test);
  console.log('a');
})

app.post('/survey', function(req, res) {
  test = req.body.result;
  console.log(test);
})
