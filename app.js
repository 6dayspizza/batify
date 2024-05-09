/*
    IMPORTS
*/
const express = require('express');
const { engine } = require('express-handlebars');
const axios = require('axios');
const exphbs = require('express-handlebars');
const db = require('./database/db-connector');
const parse = require('csv-parse');
const { getIcon } = require('simple-icons');
const cors = require('cors');

/*
    SETUP
*/

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views/public'));

const hbs = exphbs.create({
    partialsDir: 'views/partials',
    extname: '.hbs',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(cors())


app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

/*
    ALL GET REQUESTS TO DISPLAY DATA
*/

app.get('/', (req, res, next) => {
    res.redirect(307, '/welcome');
});

app.get('/welcome', (req, res, next) => {
    // Fetch data from microservice
    // https://arcane-hollows-29475-7828051692ff.herokuapp.com/random-quote-golf
    axios
        .get('https://arcane-hollows-29475-7828051692ff.herokuapp.com/random-quote-golf')
        .then((response) => {
            // Render welcome page with fetched data
            res.render('welcome', { data: response.data });
            console.log('blah', response.data.quote);
        })
        .catch((error) => {
            console.error('Error fetching data from microservice:', error);
            // If error occurs, render welcome page without data
            res.render('welcome');
        });
});

app.get('/form', function (req, res) {
    res.render('form', {
        active: { form: true },
    });
});

app.get('/faq', function (req, res) {
    res.render('faq', {
        active: { faq: true },
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        active: { about: true },
    });
});

app.get('/features', function (req, res) {
    res.render('features', {
        active: { features: true },
        active: { about: true },
    });
});

app.get('/roadmap', function (req, res) {
    res.render('roadmap', {
        active: { roadmap: true },
        active: { about: true },
    });
});

app.get('/stats', (req, res) => {
    res.render('stats', {
        speciesCount: speciesCount,
        active: { stats: true },
    });
});

/*
    MICROSERVICE A
*/
// https://arcane-hollows-29475-7828051692ff.herokuapp.com/
axios
    .get('https://arcane-hollows-29475-7828051692ff.herokuapp.com/')
    .then((response) => {
        console.log(response.data); // Output: "hello"
    })
    .catch((error) => {
        console.error('Error fetching data from microservice:', error);
    });

/*
    FANCY EXTRAS
*/

const speciesCount = {
    'Hypsugo savii': 10,
    'Pipistrellus pipistrellus': 15,
    // Add counts for other species...
};

/*
    LISTENER
*/

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
