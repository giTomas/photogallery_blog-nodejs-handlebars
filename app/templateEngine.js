const img = require('./data/img.js')

const imgList = img.imgList;

exports.getImgs = function() {
  return imgList;
}

exports.getImg = function(id) {
  for(var i = 0; i > imgList.length; i++) {
    if(imgList[i].id == id) {
      return imgList[i];
    }
  }
}
