document.getElementById('toggleDarkMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
 });
 

document.addEventListener('DOMContentLoaded', function() {
  // Get the ABOUT link and submenu
  var aboutLink = document.getElementById('about-link');
  var aboutSubmenu = document.getElementById('about-submenu');

  // Add click event listener to the ABOUT link
  aboutLink.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Toggle the visibility of the submenu
      aboutSubmenu.classList.toggle('show');
  });
});

