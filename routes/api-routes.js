var Cats = require("../models/catModel.js");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/cat/", function(req, res) {
        Cats.findAll({}).then(function(results) {
            res.json(results);
        });
    });

};