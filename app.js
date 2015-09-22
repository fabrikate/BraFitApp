var express = require('express');
app = express();
var exphbs = require('express-handlebars');
var methodOverride = require('method-Override');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var session = require('cookie-session');
var bcrypt = require('bcrypt');
db = require('./models');
loginMiddleware = require('./middleware/loginHelper');
routeMiddleware = require('./middleware/routeHelper');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views/');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Set up Cookie Session
app.use(session({
  maxAge: 3600000,
  secret: 'noDoubleBubble',
  name: 'BRAmazing'
}));

//Use Login Middleware
app.use(loginMiddleware);

require('./controllers/index');

app.listen(3000, function() {
  console.log('Server running on localhost 3000');
});
