var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// create app/json parser
// var jsonParser = bodyParser.json();
// ! - this is the root of all my issues I think.


// require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ type:  'application/*+json' }));
// app.use(bodyParser.raw({ type:  'application/vnd.custom-type' }));
app.use(bodyParser.text({ type:  'text/html' }));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);

});