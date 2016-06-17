const contentEngine  = require('./contentEngine');   // nutne!!!

module.exports = function(router){

  //middleware demonstration
  router.use((req, res, next) => {
    const time = new Date();
    console.log(req.method, req.url  + " " +  time.toString());
    next();
  })

  router.post('/contact/message', function(req, res) {
    console.log(req.body);
    res.send('processing');

  });

  router.get('/', (req, res) => res.render('home', {title: "Úvod"}));

  router.get('/about', (req, res) => res.render('about', {title: "O stránke"}));

  router.get('/blog', function(req, res){
    var tags = contentEngine.getAllTags();
    res.render('blog', {title: "Blog", posts: contentEngine.getPosts(), allTags: tags});
  });

  router.get('/galleries', function(req, res){
    res.render('galleries', { title: "Galéria", imgs: contentEngine.getImgs()});
  });

  router.get('/post/:id', function(req, res){
    var post = contentEngine.getPost(req.params.id);
    res.render('post', { title: post.title, blog: post });
  })

  router.get('/tags/:id', function(req, res){
    var postsByTag = contentEngine.getPostsByTag(req.params.id);
    res.render('tag', { title: req.params.id, posts: postsByTag });
  })

  router.get('/authors/:id', function(req, res){
    var author = contentEngine.getAuthor(req.params.id);
    var tags = contentEngine.getAllTagsOfAuthor(req.params.id);
    res.render('author', { title: req.params.id, profile: author, allTags: tags });
  })

  router.get('/posts-by-author/:id', function(req, res){
    var postsByAuthor = contentEngine.getAllPostsByAuthor(req.params.id);
    res.render('posts-by-author', { title: req.params.id, posts: postsByAuthor, author: postsByAuthor[0]['author'] });
  })

  router.get('/tags-of-author/:id', (req, res) => res.render('posts-by-author', { title: req.params.id }));

  // get contact
  router.get('/contact', (req, res) => res.render('contact', { title: "Kontakt" }));

}
