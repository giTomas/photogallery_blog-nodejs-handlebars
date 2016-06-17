(function(){
  "use strict";

  //get elements
    const close = document.getElementById('js-menu-close');
    const open  = document.getElementById('js-menu-open');
    const menu  = document.getElementById('js-menu');


  // display fn
    // open fn
    function openFn() {
      menu.style.display = "flex";
      open.classList.toggle("navicon-is-hidden");
      close.classList.toggle("navicon-is-hidden");
      setTimeout(function() {
        menu.classList.toggle("menu-is-scaled")}, 15);
    }

    // close fn
    function closeFn() {

      menu.classList.toggle("menu-is-scaled")
      open.classList.toggle("navicon-is-hidden");
      close.classList.toggle("navicon-is-hidden");
      setTimeout(function() {
        menu.style.display = "" }, 340);
    }

    const closeHandler = function(){
        closeFn();
    };

    const openHandler = function(){
        openFn();
    };

  // attach event handlers
    close.addEventListener('click', closeHandler, false);
    open.addEventListener('click', openHandler, false);

})();
