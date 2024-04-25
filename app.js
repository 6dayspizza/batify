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
  res.render("form")
})

app.get("/faq", function(req, res) {
  res.render("faq")
})

app.get("/about", function(req, res) {
  res.render("about")
})

app.get("/features", function(req, res) {
  res.render("features")
})

app.get("/roadmap", function(req, res) {
  res.render("roadmap")
})

app.get('/stats', (req, res) => {
  res.render('Stats', { speciesCount: speciesCount });
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