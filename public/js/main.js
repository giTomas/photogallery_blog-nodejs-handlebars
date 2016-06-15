(function(){
  "use strict";

  const imgs  = document.querySelectorAll('.js-image');
  const modal = document.getElementById('js-modal');
  const close = document.getElementById('js-close');
  const img   = document.getElementById('js-img');
  console.log(modal);

  //fn helpers && animations
  function getData(el) {
    //return el.dataset.url;
    return el.getAttribute("data-url");
  }

  function slideDown() {
    modal.classList.add('is-sliding-down');
  }


  //event handler --> display first image && get data of this image

  const imgShowHandler = function(event) {
    let eTarget = event.currentTarget;
    let url     = getData(eTarget);
    modal.style.display = "flex";
    img.setAttribute("src", url)
    setTimeout(slideDown, 40);
    setTimeout(function(){
      img.style.opacity = 1;
    }, 260 );
    console.log(url);

  }

  const modalClose = function() {
    img.style.opacity = 0;
    img.setAttribute('src', "");
    modal.classList.remove('is-sliding-down');
    setTimeout(function(){
      modal.style.display = "";
    }, 250)
  }

  //attach event handlers && get all datas && make array of URLS for future use

  const allUrls = [];

  for (let i = 0; i <imgs.length; i++) {
    imgs[i].addEventListener('click', imgShowHandler, false);
    let pUrl = getData(imgs[i]);
    allUrls.push(pUrl)
  }
  console.log(allUrls);

 close.addEventListener('click', modalClose, false);

  // TODO templating

  //show img
    // TODO check position of actual image in array of images
    // TODO set current slide

  // TODO img-slider ctrls
    // display logic

})();
