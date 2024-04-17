/*
    SETUP
*/

var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views/public"));

PORT = 1000;
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
  res.redirect(307, "/form");
});

app.get("/form", function(req, res) {
  res.render("form")
})

app.get("/faq", function(req, res) {
  res.render("faq")
})

app.get("/about", function(req, res) {
  res.render("about")
})




/*
    LISTENER
*/

app.listen(PORT, function () {
  console.log(
    "Express started on http://localhost:" +
    PORT +
    "; press Ctrl-C to terminate."
  );
});