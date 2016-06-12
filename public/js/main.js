(function(){
  "use strict";

  const imgs  = document.querySelectorAll('.js-image');
  const modal = document.getElementById('js-modal');

  //fn helpers
  function getData(el) {
    //return el.dataset.url;
    return el.getAttribute("data-url");
  }


  //event handler --> display first image && get data of this image

  const imgShowHandler = function(event) {
    let eTarget = event.currentTarget;
    let url     = getData(eTarget);
    console.log(url);
  }

  //attach event handlers && get all datas && make array of URLS for future use

  const allUrls = [];

  for (let i = 0; i <imgs.length; i++) {
    imgs[i].addEventListener('click', imgShowHandler, false);
    let pUrl = getData(imgs[i]);
    allUrls.push(pUrl)
  }
  // console.log(allUrls);

  //templating

  //show img
    // TODO check position of actual image in array of images
    // TODO set current slide

  // img ctrls
    // display logic

})();
