const contentEngine  = require('./contentEngine');   // nutne!!!
const mailer         = require('./mailer');

module.exports = function(router){

  //middleware demonstration
  router.use((req, res, next) => {
    const time = new Date();
    console.log(req.method, req.url  + " " +  time.toString());
    next();
  })

  router.post('/contact/message', mailer.handleSendMail);

  router.get('/', function(req, res){
     res.render('home', {title: "Úvod"})
   });

  router.get('/about', (req, res) => res.render('about', {title: "O stránke"}));

  router.get('/blog', (req, res) => {
    const tags = contentEngine.getAllTags();
    res.render('blog', {title: "Blog", posts: contentEngine.getPosts(), allTags: tags});
  });

  router.get('/galleries', (req, res) => {
    res.render('galleries', { title: "Galéria", imgs: contentEngine.getImgs()});
  });

  router.get('/post/:id', (req, res) => {
    const post = contentEngine.getPost(req.params.id);
    res.render('post', { title: post.title, blog: post });
  });

  router.get('/tags/:id', (req, res) => {
    const postsByTag = contentEngine.getPostsByTag(req.params.id);
    res.render('tag', { title: req.params.id, posts: postsByTag });
  });

  router.get('/authors/:id', (req, res) => {
    const author = contentEngine.getAuthor(req.params.id);
    const tagsOfAuthor = contentEngine.getAllTagsOfAuthor(req.params.id);
    res.render('author', { title: req.params.id, profile: author, allTags: tagsOfAuthor });
  });

  router.get('/posts-by-author/:id', (req, res) => {
    const postsByAuthor = contentEngine.getAllPostsByAuthor(req.params.id);
    res.render('posts-by-author', { title: req.params.id, posts: postsByAuthor, author: postsByAuthor[0]['author'] });
  });

  router.get('/tags-of-author/:id', (req, res) => res.render('posts-by-author', { title: req.params.id }));

  // geconstontact
  router.get('/contact', (req, res) => res.render('contact', { title: "Kontakt" }));

}
