console.log("👋 If you're checking my console, you either want to hire me or debug me. Either way, let's talk.");

document.addEventListener("DOMContentLoaded", function() {
   var menu = document.getElementById("menu");
   var content = document.querySelector(".content");
   var initialMenuOffset = menu.offsetTop;
   var menuHeight = menu.offsetHeight;

   // Show menu after layout is stable to prevent flicker
   requestAnimationFrame(function() {
      menu.classList.add("ready");
   });

   // Recalculate menu position on resize (handles orientation changes on mobile)
   window.addEventListener("resize", function() {
      if (!menu.classList.contains("sticky")) {
         initialMenuOffset = menu.offsetTop;
         menuHeight = menu.offsetHeight;
      }
   });

   window.onscroll = function() {
      if(window.pageYOffset > initialMenuOffset) {
         menu.classList.add("sticky");
         // Dynamically set padding to match exact menu height
         content.style.paddingTop = menuHeight + "px";
      } else {
         menu.classList.remove("sticky");
         content.style.paddingTop = "";
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

   tagline.textContent = "";
   type();
});
