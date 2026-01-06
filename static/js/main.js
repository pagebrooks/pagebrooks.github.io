console.log("👋 If you're checking my console, you either want to hire me or debug me. Either way, let's talk.");

document.addEventListener("DOMContentLoaded", function() {
   var menu = document.getElementById("menu");
   var initialMenuOffset = menu.offsetTop;
   window.onscroll = function() {
      if(window.pageYOffset > initialMenuOffset) {
         menu.classList.add("sticky");
      } else {
         menu.classList.remove("sticky");
      }
   };
});

// Typing effect for tagline
document.addEventListener("DOMContentLoaded", function() {
   var tagline = document.getElementById("tagline");
   var text = "Computers love to read what I write.";
   var index = 0;
   var typingSpeed = 20;

   function type() {
      if (index < text.length) {
         tagline.textContent += text.charAt(index);
         index++;
         setTimeout(type, typingSpeed);
      }
   }

   type();
});
