(function(){
  "use strict";

  const imgs      = document.querySelectorAll('.js-image');
  const modal     = document.getElementById('js-modal');
  const close     = document.getElementById('js-close');
  const img       = document.getElementById('js-img');
  const container = document.getElementById('js-container');
  const next      = document.getElementById('js-next');
  const previous  = document.getElementById('js-previous');
  const play      = document.getElementById('js-play');
  const stop      = document.getElementById('js-stop');
  const allUrls   = [];
  let currentImg;
  let playId;

  //helpers && animations
  // get data attr
  function getData(el, attr) {
    //return el.dataset.url;
    return el.getAttribute(attr);
  }

  // modal slide down
  const slideDownUp = function() {
    if (modal.classList.contains('is-sliding-down')) {
      modal.classList.remove('is-sliding-down');
    } else {
      modal.classList.add('is-sliding-down');
    }
  };

  //event handler open gallery
  //-> get url of image & find his place in the array == value of currenImg & display image
  const imgShowHandler = function(event) {
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
  const closeHandler = function() {
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
  const nextHandler = () =>  nextImg();

  const previousHandler = () => previousImg();

  const playHandler = () => playImgs();

  const stopHandler = () => stopImgs();

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
