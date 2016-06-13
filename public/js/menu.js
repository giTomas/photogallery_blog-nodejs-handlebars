(function(){
  "use strict";

  //get elements
    const close = document.getElementById('js-menu-close');
    const open  = document.getElementById('js-menu-open');
    const menu  = document.getElementById('js-menu');
    // console.log(menu);

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


    const closeHandler = function(event){
        closeFn();
    };

    const openHandler = function(event){
        openFn();
    };

  // attach event handlers
    close.addEventListener('click', closeHandler, false);
    open.addEventListener('click', openHandler, false);

})();
