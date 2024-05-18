document
    .getElementById('toggleDarkMode')
    .addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

document.addEventListener('DOMContentLoaded', function () {
    // Get the ABOUT link and submenu
    var aboutLink = document.getElementById('about-link');
    var aboutSubmenu = document.getElementById('about-submenu');

    // Add click event listener to the ABOUT link
    aboutLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Toggle the visibility of the submenu
        aboutSubmenu.classList.toggle('show');
    });
});

function enterSite() {
    window.location.href = '/form';
}

async function fetchData() {
    try {
        // https://arcane-hollows-29475-7828051692ff.herokuapp.com/random-quote-golf
        const response = await axios.get(
            'https://arcane-hollows-29475-7828051692ff.herokuapp.com/random-quote-golf'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data from microservice:', error);
    }
}

async function showQuote() {
    // Fetch data initially when the page loads
    const data = await fetchData();
    const { quote } = data;

    // Update header content with quote and author
    const quoteAuthor = document.getElementById('quoteAuthor');
    quoteAuthor.innerHTML = `<p>${quote}</p></p>`;
    quoteAuthor.classList.toggle('show');
    console.log(quote)
}
