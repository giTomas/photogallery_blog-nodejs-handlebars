const img     = require('./data/img.json');    //load JSON data
const blog    = require('./data/blog.json');
const authors = require('./data/authors.json');

// search functions
//----------------------------------------------------------------------------->

//return whole collection
function findAll(collection){
  return collection;
}

//find item in collection by particular criterion
function findItem(param, prop, collection){
  for(var i = 0; i < collection.length; i++) {
    if (collection[i][prop] == param) {
      return collection[i];
    }
  }
}

//find all posts by particular author in collection
function findAllPostsByAuthor(param, prop, collection) {
  const postsBy = [];
  for (var i = 0; i < collection.length; i++) {
    var  collectionItem = collection[i];
    if (collection[i][prop] == param) {
      postsBy.push(collectionItem);
    }
  }
  return postsBy;
}

//find all tags in collection
function findAllTagsIn(collection) {
  const tags = [];
  for (var i = 0; i < collection.length; i++) {
    var postTags = collection[i].tags;

    for (var j = 0; j < postTags.length; j++) {
      if (tags.indexOf(postTags[j].tag) === -1) {
        tags.push(postTags[j].tag);
      }
    }
  }
  const sortedTags = tags.sort();
  return sortedTags;
}

//find all posts with particuar tag
function findPostsByTag(tag, collection) {
  const byTag = [];
  for (var i = 0; i < collection.length; i++) {
      var postTags = blog[i].tags;
    for (var j = 0; j < postTags.length; j++) {
      if ( postTags[j].tag == tag ) {
        byTag.push(blog[i]);
      }
    }
  }
  return byTag;
}

//exports
//----------------------------------------------------------------------------->

// get all images
exports.getImgs = () => findAll(img);

/*
exports.getImgs = function() {
  return findAll(img);
}*/

/*exports.getImg = function(id) {
  for(var i = 0; i < img.length; i++) {
    if(img[i].id == id) {
      return img[i];
    }
  }
}*/

//get all posts
exports.getPosts = () => findAll(blog);

/*
exports.getPosts = function() {
return findAll(blog);
}*/
/*
exports.getPost = function(id) {
  for(var i = 0; i < blog.length; i++) {
    if(blog[i].id == id) {
      return blog[i];
    }
  }
}*/

// get particular post
exports.getPost = (id) => findItem(id, 'id', blog);

/*
exports.getPost = function(id) {
  return findItem(id, 'id', blog);
}*/

// get all tags in posts
exports.getAllTags = () => findAllTagsIn(blog);

/*
exports.getAllTags = function(){
  return findAllTagsIn(blog);
}*/
/*exports.getAllTags = function(){
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
}*/

// get all posts with particular tag
/*
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
}*/

//get posts by particular tag
exports.getPostsByTag = (tag) => findPostsByTag(tag, blog);

/*exports.getPostsByTag = function(tag){
  return findPostsByTag(tag, blog);
}*/


// get author
/*
exports.getAuthor = function(id){
  for (var i = 0; i < authors.length; i++) {
    if (authors[i].id == id ) {
      return authors[i];
    }
  }
}*/

// find particular author
exports.getAuthor = (id) => findItem(id, 'id', authors);

/*exports.getAuthor = function(id){
  return findItem(id, 'id', authors);
}*/

//get all posts by auhtor
exports.getAllPostsByAuthor = (id) => findAllPostsByAuthor(id, 'authorId', blog);

/*exports.getAllPostsByAuthor = function(id){
  return findAllPostsByAuthor(id, 'authorId', blog);
}*/
/*exports.getAllPostsByAuthor = function(id){
  const postsByAuthor = [];
  for (var i = 0; i < blog.length; i++) {
    if (blog[i].authorId == id ) {
      postsByAuthor.push(blog[i]);
    }
  }
  return postsByAuthor;
}*/

//  get all tags related to author
exports.getAllTagsOfAuthor = (id) => {
  const postsByAuthor = findAllPostsByAuthor(id, 'authorId', blog);
  return findAllTagsIn(postsByAuthor);
}
/*exports.getAllTagsOfAuthor = function(id){
  const postsByAuthor = findAllPostsByAuthor(id, 'authorId', blog);
  return findAllTagsIn(postsByAuthor);
}*/
/*exports.getAllTagsOfAuthor = function(id){
  const postsByAuthor = getAllPostsByAuthor(id, 'authorId', blog);
  const tagsByAuthor  = [];

  for (var i = 0; i < blog.length; i++) {   //1.get posts by author
    if (blog[i].authorId == id ) {
      postsByAuthor.push(blog[i]);
    }
  }
    //get all tags by author
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
}*/
