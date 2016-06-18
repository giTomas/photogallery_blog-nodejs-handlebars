var img     = require('./data/img.json');    //load JSON data
var blog    = require('./data/blog.json');
var authors = require('./data/authors.json');

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
  var postsBy = [];
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
  var tags = [];
  for (var i = 0; i < collection.length; i++) {
    var postTags = collection[i].tags;

    for (var j = 0; j < postTags.length; j++) {
      if (tags.indexOf(postTags[j].tag) === -1) {
        tags.push(postTags[j].tag);
      }
    }
  }
  var sortedTags = tags.sort();
  return sortedTags;
}

//find all posts with particuar tag
function findPostsByTag(tag, collection) {
  var byTag = [];
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


//get all posts
exports.getPosts = () => findAll(blog);


// get particular post
exports.getPost = (id) => findItem(id, 'id', blog);


// get all tags in posts
exports.getAllTags = () => findAllTagsIn(blog);


//get posts by particular tag
exports.getPostsByTag = (tag) => findPostsByTag(tag, blog);


// find particular author
exports.getAuthor = (id) => findItem(id, 'id', authors);


//get all posts by auhtor
exports.getAllPostsByAuthor = (id) => findAllPostsByAuthor(id, 'authorId', blog);


//  get all tags related to author
exports.getAllTagsOfAuthor = (id) => {
  var postsByAuthor = findAllPostsByAuthor(id, 'authorId', blog);
  return findAllTagsIn(postsByAuthor);
}
