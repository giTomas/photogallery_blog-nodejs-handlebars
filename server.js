
const express        = require('express');
const app            = express(app);
const bodyParser     = require('body-parser');
const port           = process.env.PORT || 8080;
const path           = require('path');
const exphbs         = require('express-handlebars');
const contentEngine  = require('./app/contentEngine');


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
  res.render('home', {title: "Úvod"});
});

app.get('/about', function(req, res){
  res.render('about', {title: "O stránke"});
});

app.get('/blog', function(req, res){
  // var tags = contentEngine.getAllTags();
  // console.log(tags);
  res.render('blog', {title: "Blog", posts: contentEngine.getPosts() });
});

app.get('/galleries', function(req, res){
  res.render('galleries', { title: "Galéria", imgs: contentEngine.getImgs()});
});

app.get('/post/:id', function(req, res){
  var post = contentEngine.getPost(req.params.id);
  res.render('post', { title: post.title, blog: post });
})

app.get('/tags/:id', function(req, res){
  var postsByTag = contentEngine.getPostsByTag(req.params.id);
  res.render('tag', { title: req.params.id, posts: postsByTag });
})

//app.use(express.static('public'));

app.listen(port);
console.log('App is listennig on port 8080');
