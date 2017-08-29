var People = require("../models/catModel.js");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/cat/", function(req, res) {
        People.findAll({}).then(function(results) {
            res.json(results);
        });
    });

};