const contentEngine  = require('./contentEngine');   // nutne!!!


module.exports = function(app){

  app.get('/', function(req, res){
    res.render('home', {title: "Úvod"});
  });

  app.get('/about', function(req, res){
    res.render('about', {title: "O stránke"});
  });

  app.get('/blog', function(req, res){
    // var tags = contentEngine.getAllTags();
    // console.log(tags);
    //var allTags = contentEngine.getAllTags();
    //console.log(allTags);
    res.render('blog', {title: "Blog", posts: contentEngine.getPosts(), allTags: contentEngine.getAllTags()});
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
    // console.log(postsByTag);
    res.render('tag', { title: req.params.id, posts: postsByTag });
  })

  app.get('/authors/:id', function(req, res){
    res.render('author', {title: req.params.id, /*profile: authorInfo*/});
  })

}
