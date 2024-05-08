/*
    SETUP
*/

var express = require("express");
var app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views/public"));

const { engine } = require("express-handlebars");
var exphbs = require("express-handlebars");
const hbs = exphbs.create({
  partialsDir: "views/partials",
  extname: ".hbs",
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// DATABASE
var db = require("./database/db-connector");


/*
    ALL GET REQUESTS TO DISPLAY DATA
*/

app.get("/", (req, res, next) => {
  res.redirect(307, "/welcome");
});

app.get("/welcome", function(req, res) {
  res.render("welcome")
})

app.get("/form", function(req, res) {
  res.render("form", {
    active: { form: true },
  });
})

app.get("/faq", function(req, res) {
  res.render("faq", {
    active: { faq: true },
  });
})

app.get("/about", function(req, res) {
  res.render("about", {
    active: { about: true },
  });
})

app.get("/features", function(req, res) {
  res.render("features", {
    active: { features: true },
    active: { about: true},
  });
})

app.get("/roadmap", function(req, res) {
  res.render("roadmap", {
    active: { roadmap: true },
    active: { about: true},
  });
})

app.get('/stats', (req, res) => {
  res.render('stats',{
    speciesCount: speciesCount,
    active: {stats: true},
  });
});

/*
    MICROSERVICE A
*/

const axios = require('axios');

axios.get('https://arcane-hollows-29475-7828051692ff.herokuapp.com/')
    .then(response => {
        console.log(response.data); // Output: "hello"
    })
    .catch(error => {
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