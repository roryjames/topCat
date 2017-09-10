
var topCat;

// var data = require("./models/catModel.js");
$(document).ready(function() {
    // event.preventDefault();
  
//pull all json data
$.get('/api/cat/', function(data) {
    console.log(data);
    //select a random cat to display on html
    // var randomNum = Math.floor(Math.random() * (30 - 1) + 1);
    // var numbers = [1, 2, 3, 4];
    // Math.max.apply(null, numbers)

    // var arr = $.parseJSON(data);
    // arr = $.map(arr, function(o){ return o.y; });
    
    for(var i=0; i<data.length; i++){
        if(data[i].votes === Math.max.apply(null, data.votes)){
            topCat = data[i].id;
            $('#well-section').append('<img class="cat" src=' + data[i].picture + '>');
        }
        return topCat;
    }
    // likedCat = data[3].id;
    
    console.log(topCat);
    var liked = $("<h2>");
    liked.text(topCat.votes);
    $("#votes").append(liked);

});

});

    






$("#like").on('click', function() {
    $(".xo").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    }, 1000);
}, 2000);

$("#dislike").on('click', function() {
    $(".xo").animate({
        right: '250px',
        opacity: '0.5',
        height: '50px',
        width: '50px'
    }, 1000);
}, 2000);