

var menu = document.getElementById("menu");
var initialMenuOffset = menu.offsetTop;
window.onscroll = function() {
   if(window.pageYOffset > initialMenuOffset) {
	   menu.classList.add("sticky");
   } else {
	   menu.classList.remove("sticky");
   }
};