//pull all json data

$.get('/api/cat/', function(data) {
    console.log(data);

    //select a random cat to display on html
    var randomNum = Math.floor(Math.random() * (30 - 1) + 1);

    $('#well-section').append('<img class="cat" src=' + data[randomNum].picture + '>');

    $('#like').on('click', function() {
        app.post('/api/like', function(req, res) {
            res++;
        })
    })

});