const img     = require('./data/img.json');    //load JSON data
const blog    = require('./data/blog.json');
const authors = require('./data/authors.json');

//const imgList = img.imgList;

exports.getImgs = function() {
  return img;
}

exports.getImg = function(id) {
  for(var i = 0; i < img.length; i++) {
    if(img[i].id == id) {
      return img[i];
    }
  }
}

exports.getPosts = function() {
  return blog;
}

exports.getPost = function(id) {
  for(var i = 0; i < blog.length; i++) {
    if(blog[i].id == id) {
      return blog[i];
    }
  }
}

// get all tags in posts

exports.getAllTags = function(){
  const tags = [];
  for (var i = 0; i < blog.length; i++) {
    var postTags = blog[i].tags;
    for (var j = 0; j < postTags.length; j++) {
      if (tags.indexOf(postTags[j].tag) === -1) {
        tags.push(postTags[j].tag);
      }
    }
  }
  const sortedTags = tags.sort();    //not reliable for production!!
  return sortedTags;
}

// get all posts with particular tag

exports.getPostsByTag = function(tag){
  const byTag = [];
  for (var i = 0; i < blog.length; i++) {
      var postTags = blog[i].tags;
    for (var j = 0; j < postTags.length; j++) {
      if ( postTags[j].tag == tag ) {
        byTag.push(blog[i]);
      }
    }
  }
  return byTag;
}


// get author
exports.getAuthor = function(id){
  for (var i = 0; i < authors.length; i++) {
    if (authors[i].id == id ) {
      return authors[i];
    }
  }
}

// TODO dipslay all posts by author
exports.getAllPostsByAuthor = function(id){
  const postsByAuthor = [];

  for (var i = 0; i < blog.length; i++) {
    if (blog[i].authorId == id ) {
      postsByAuthor.push(blog[i]);
    }
  }

  return postsByAuthor;
}

// TODO display all tags related to author

exports.getAllTagsOfAuthor = function(id){
  const postsByAuthor = [];
  const tagsByAuthor  = [];

  for (var i = 0; i < blog.length; i++) {   //1.get posts by author
    if (blog[i].authorId == id ) {
      postsByAuthor.push(blog[i]);
    }
  }

  for (var i = 0; i < postsByAuthor.length; i++){  //2. get tags from posts
      var postTags = postsByAuthor[i].tags;
      for (var j = 0; j < postTags.length; j++) {
        if (tagsByAuthor.indexOf(postTags[j].tag) === -1) {
          tagsByAuthor.push(postTags[j].tag);
        }
      }
    const sortedTags = tagsByAuthor.sort();    //not reliable for production!!

  }
  return sortedTags;
}
