//pull all json data

$.get('/api/cat/', function(data) {
    console.log(data);

    //select a random cat to display on html
    var randomNum = Math.floor(Math.random() * (30 - 1) + 1);

    $('#well-section').append('<img class="cat" src=' + data[3].picture + '>');

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