console.log("👋 If you're checking my console, you either want to hire me or debug me. Either way, let's talk.");

var menu = document.getElementById("menu");
var initialMenuOffset = menu.offsetTop;
window.onscroll = function() {
   if(window.pageYOffset > initialMenuOffset) {
	   menu.classList.add("sticky");
   } else {
	   menu.classList.remove("sticky");
   }
};
