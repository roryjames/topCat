const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

var PORT = process.env.PORT || 3000;
var db = require('./models/catModel.js');

//static directory
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});