const express        = require('express');
const app            = express(app);
const bodyParser     = require('body-parser');
const port           = process.env.PORT || 8080;
const path           = require('path');
const exphbs         = require('express-handlebars');
const contentEngine  = require('./app/templateEngine');


const router = express.Router();

//config------------------------------------------------------
app.use( "/public", express.static(path.join(__dirname + '/public')));
//app.use(bodyParser.urlencoded({'extended':'true'}));
//app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//ROUTES

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/blog', function(req, res){
  res.render('blog');
});

app.get('/galleries', function(req, res){

  res.render('galleries', {imgs: contentEngine.getImgs()});
});


//app.use(express.static('public'));

app.listen(port);
console.log('App is listennig on port 8080');
