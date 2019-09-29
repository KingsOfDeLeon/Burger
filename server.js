var express = require("express");

var app = express();

//HEROKU WON'T WORK WITH THIS. NEED TO USE BOBBI'S TIP FROM CLASS
//*****TEMPLATE******/
var PORT = process.env.PORT || 8080;
//*****TEMPLATE******/

app.use(express.static("public"));



app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});