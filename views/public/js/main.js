document.addEventListener('DOMContentLoaded', function () {
    var toggleDarkModeButton = document.getElementById('toggleDarkMode');

    // Check if dark mode is enabled in localStorage and apply it
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        document.body.classList.add('dark-mode');
    }

    toggleDarkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        // Save the current state to localStorage
        var darkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkModeEnabled', darkModeEnabled);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var aboutLink = document.getElementById('about-link');
    var aboutSubmenu = document.getElementById('about-submenu');

    // Check if "about" is active and show the submenu if it is
    if (aboutLink.classList.contains('active')) {
        aboutSubmenu.classList.add('show');
    }

    aboutLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Toggle the submenu visibility
        aboutSubmenu.classList.toggle('show');

        // Save the current state to localStorage
        var isShown = aboutSubmenu.classList.contains('show');
        localStorage.setItem('aboutSubmenuShown', isShown);
    });

    // Listen for page unload to clear submenu state if navigating away from "about"
    window.addEventListener('beforeunload', function () {
        if (!aboutLink.classList.contains('active')) {
            localStorage.removeItem('aboutSubmenuShown');
        }
    });
});

function enterSite() {
    window.location.href = '/background';
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
