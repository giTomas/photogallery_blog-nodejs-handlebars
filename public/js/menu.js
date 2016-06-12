(function(){
  "use strict";

  //get elements

    const close = document.getElementById('js-menu-close');
    const open  = document.getElementById('js-menu-open');
    const menu  = document.getElementById('js-menu');
    console.log(menu);

  // TODO display fn
    // close fn
    function openFn(){
      menu.style.display = "flex";
      open.classList.toggle("navicon-is-hidden");
      close.classList.toggle("navicon-is-hidden");
    }

    // open fn
    function closeFn(){
      menu.style.display = "";
      open.classList.toggle("navicon-is-hidden");
      close.classList.toggle("navicon-is-hidden");
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
