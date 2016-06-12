const img  = require('./data/img.json');    //load JSON data
const blog = require('./data/blog.json');

//const imgList = img.imgList;

exports.getImgs = function() {
  return img;
}

exports.getImg = function(id) {
  for(var i = 0; i > img.length; i++) {
    if(img[i].id == id) {
      return img[i];
    }
  }
}

exports.getPosts = function() {
  return blog;
}

exports.gePost = function(id) {
  for(var i = 0; i > blog.length; i++) {
    if(blog[i].id == id) {
      return blog[i];
    }
  }
}
