
var chosenCat;
// var db = require("./models/catModel.js");

//pull all json data
$.get('/api/cat/', function(data) {
    console.log(data);

    //select a random cat to display on html
    var randomNum = Math.floor(Math.random() * (30 - 1) + 1);

    $('#well-section').append('<img class="cat" src=' + data[randomNum].picture + '>');
    //assign chosen id to chosenCat
    chosenCat = data[randomNum].id;
    console.log(chosenCat);
});

// $(document).ready(function() {
$("#like").on('click', function() {
    $(".xo").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    }, 1000);
}, 2000);

//update votes of liked cat by id
$("#like").on('click', function() {
    $.put('/api/cat/', function(data) {
        //assign var chosenCat to chosen id
        data[randomNum].id = chosenCat;
        Cats.update(votes++, {
            where: {
                id: data[randomNum].id
            }
        }).then(function(dbCats){
            console.log(dbCats);
        })
    });
});

$("#dislike").on('click', function() {
    $(".xo").animate({
        right: '250px',
        opacity: '0.5',
        height: '50px',
        width: '50px'
    }, 1000);
}, 2000);