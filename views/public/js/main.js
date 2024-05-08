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

function enterSite() {
  window.location.href = "/form";
};

function quotePopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function() {
  const quoteAuthorElement = document.getElementById('quoteAuthor');

  // Function to fetch data from the microservice
  function fetchData() {
      axios.get('https://arcane-hollows-29475-7828051692ff.herokuapp.com/random-quote-golf')
          .then(response => {
              const { quote, author } = response.data;
              // Update header content with quote and author
              quoteAuthorElement.innerHTML = `<p>Quote: ${quote}</p><p>Author: ${author}</p>`;
          })
          .catch(error => {
              console.error('Error fetching data from microservice:', error);
          });
  }

  // Fetch data initially when the page loads
  fetchData();

  // Optionally, fetch data periodically
  setInterval(fetchData, 60000); // Fetch data every minute (adjust as needed)
});