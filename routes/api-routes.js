var Cats = require("../models/catModel.js");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/cat/", function(req, res) {
        Cats.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    //update votes 
    app.put("/api/cat", function(req, res) {
        db.Cats.update({
          votes: req.body.votes+1
        }, {
          where: {
            id: req.body.id
          }
        }).then(function(dbCats) {
          res.json(dbCats);
        });
      });
    
    //get highest votes
    app.get("/api/topcat/:id", function(req, res) {
        db.Cats.findOne({
          where: {
              id: req.params.id
          }
        }).then(function(dbCats) {
            res.json(dbCats);
        });
    });

};