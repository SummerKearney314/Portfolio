// script.js
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");

  // Toggle the visibility of navigation links when clicking the menu toggle button
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
