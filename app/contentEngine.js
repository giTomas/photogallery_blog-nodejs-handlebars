const img  = require('./data/img.json');    //load JSON data
const blog = require('./data/blog.json');

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

// TODO get all tags in posts

exports.getAllTags = function(){
  const tags = [];
  for (var i = 0; i < blog.length; i++) {
    var postTags = blog[i].tags;
    for (var j = 0; j < postTags.length; i++) {
      if (!tags.includes(postTags[j].tag)) {
        tags.push(blog[i]);
      }
    }
  }
  return tags;
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
