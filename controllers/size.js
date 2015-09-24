// size survey routes
app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname + '../../views/layouts/index.html'));

})

app.post('/survey', function(req, res) {
  test = req.body.braSize;
  console.log(test);
})
