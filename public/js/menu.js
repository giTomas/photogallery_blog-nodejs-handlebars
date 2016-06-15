(function(){
  "use strict";

  //get elements
    const close = document.getElementById('js-menu-close');
    const open  = document.getElementById('js-menu-open');
    const menu  = document.getElementById('js-menu');
    // console.log(menu);


  //anim

  function fadeOut(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "flex";

    (function fade(){
      var val = parseFloat(el.style.opacity);
      if (!((val += 0.1) > 1 )) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  // TODO display fn
    // close fn
    function openFn() {
      menu.style.display = "flex";
      open.classList.toggle("navicon-is-hidden");
      close.classList.toggle("navicon-is-hidden");
      setTimeout(function() {
        menu.classList.toggle("navicon-is-scaled")}, 15);
    }

    // open fn
    function closeFn() {

      menu.classList.toggle("navicon-is-scaled")
      open.classList.toggle("navicon-is-hidden");
      close.classList.toggle("navicon-is-hidden");
      setTimeout(function() {
        menu.style.display = "" }, 340);
    }
    // generic fnuest
    function openCloseFn(value) {
      menu.style.display = value;
      open.classList.toggle("navicon-is-hidden");
      close.classList.toggle("navicon-is-hidden");
      setTimeout(function() {
        menu.classList.toggle("navicon-is-scaled")}, 10);
    }

  // TODO event handlers


    const closeHandler = function(){
        closeFn();
    };

    const openHandler = function(){
        openFn();
        // open.classList.toggle("navicon-is-hidden");
        // close.classList.toggle("navicon-is-hidden");
        // fadeOut(menu);
    };

  // attach event handlers
    close.addEventListener('click', closeHandler, false);
    open.addEventListener('click', openHandler, false);

})();
