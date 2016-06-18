(function(){
  "use strict";

  var imgs      = document.querySelectorAll('.js-image');
  var modal     = document.getElementById('js-modal');
  var close     = document.getElementById('js-close');
  var img       = document.getElementById('js-img');
  var container = document.getElementById('js-container');
  var next      = document.getElementById('js-next');
  var previous  = document.getElementById('js-previous');
  var play      = document.getElementById('js-play');
  var stop      = document.getElementById('js-stop');
  var allUrls   = [];
  let currentImg;
  let playId;

  //helpers && animations
  // get data attr
  function getData(el, attr) {
    //return el.dataset.url;
    return el.getAttribute(attr);
  }

  // modal slide down
  var slideDownUp = function() {
    if (modal.classList.contains('is-sliding-down')) {
      modal.classList.remove('is-sliding-down');
    } else {
      modal.classList.add('is-sliding-down');
    }
  };

  //event handler open gallery
  //-> get url of image & find his place in the array == value of currenImg & display image
  var imgShowHandler = function(event) {
    let eTarget = event.currentTarget;
    let url     = getData(eTarget, "data-url");
    currentImg  = allUrls.indexOf(url);
    img.setAttribute("src", url)
    modal.style.display = "flex";
    setTimeout(slideDownUp, 20);
    setTimeout(function(){
      container.style.opacity = 1;
    }, 240);
  }
  //close gallery
  var closeHandler = function() {
    container.style.opacity = "";
    stopImgs();
    setTimeout(slideDownUp, 500);
    setTimeout(function(){
      modal.style.display = "";
      img.setAttribute('src', "");
    }, 720)
  }

  // imgs-slider ctrls
    function nextImg() {
      goToImg(currentImg + 1);
    };

    function previousImg(){
      goToImg(currentImg -1);
    }

    function playImgs(){
       playId = setInterval(nextImg, 3500);
     };

    function stopImgs(){
       clearInterval(playId);
       playId = null;
     };

    function goToImg(n){
        currentImg = (n+allUrls.length)%allUrls.length;
        let url = allUrls[currentImg];
        container.style.opacity = "";
      setTimeout(function(){
        img.setAttribute("src", "")
        img.setAttribute("src", url)
      }, 500);
      setTimeout(function(){
        container.style.opacity = 1;
      }, 600);
    }

  // ctrls handlers
  var nextHandler = () =>  nextImg();

  var previousHandler = () => previousImg();

  var playHandler = () => playImgs();

  var stopHandler = () => stopImgs();

  //attach event handlers && get all datas && populate array of URLS for future use
  for (let i = 0; i <imgs.length; i++) {
    imgs[i].addEventListener('click', imgShowHandler, false);
    let pUrl = getData(imgs[i], "data-url");
    allUrls.push(pUrl)
  }

  //attach event handlers for ctrls
  close.addEventListener('click', closeHandler, false);
  next.addEventListener('click', nextHandler, false);
  previous.addEventListener('click', previousHandler, false);
  play.addEventListener('click', playHandler, false);
  stop.addEventListener('click', stopHandler, false);

})();
