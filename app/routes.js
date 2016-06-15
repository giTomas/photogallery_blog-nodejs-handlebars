const contentEngine  = require('./contentEngine');   // nutne!!!

module.exports = function(app){

  app.get('/', function(req, res){
    res.render('home', {title: "Úvod"});
  });

  app.get('/about', function(req, res){
    res.render('about', {title: "O stránke"});
  });

  app.get('/blog', function(req, res){
    var tags = contentEngine.getAllTags();
    // console.log(tags);
    //var allTags = contentEngine.getAllTags();
    //console.log(allTags);
    res.render('blog', {title: "Blog", posts: contentEngine.getPosts(), allTags: tags});
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
    var author = contentEngine.getAuthor(req.params.id);
    var tags = contentEngine.getAllTagsOfAuthor(req.params.id);
    console.log(tags);
    res.render('author', { title: req.params.id, profile: author, allTags: tags });
  })

  app.get('/posts-by-author/:id', function(req, res){
    var postsByAuthor = contentEngine.getAllPostsByAuthor(req.params.id);
    res.render('posts-by-author', { title: req.params.id, posts: postsByAuthor });
  })

  //TODO tags by author
  app.get('/tags-of-author/:id', function(req, res){
    res.render('posts-by-author', { title: req.params.id });
  })
}
