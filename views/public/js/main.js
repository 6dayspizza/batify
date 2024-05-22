document
    .getElementById('toggleDarkMode')
    .addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

document.addEventListener('DOMContentLoaded', function () {
    var aboutLink = document.getElementById('about-link');
    var aboutSubmenu = document.getElementById('about-submenu');

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();

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
            'https://arcane-hollows-29475-7828051692ff.herokuapp.com/random-quote-bats'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data from microservice:', error);
    }
}

async function showQuote() {
    // Fetch data initially when the page loads
    const data = await fetchData();
    const { fact } = data;

    // Update header content with quote and author
    const quoteAuthor = document.getElementById('quoteAuthor');
    quoteAuthor.innerHTML = `<p>${fact}</p>`;
    quoteAuthor.classList.toggle('show');
}
