const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const Cats = sequelize.define('cats', {
    picture: {
        type: Sequelize.STRING
    },
    votes: {
        type: Sequelize.INTEGER
    },
    rating: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Cats.sync();

module.exports = Cats;