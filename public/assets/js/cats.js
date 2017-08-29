//pull all json data
//select a random cat to display on html
var randomNum = Math.floor(Math.random() * (20 - 1) + 1);

$.get('/api/cat/', function(req, res) {

}).then(function(data, res) {
    res.JSON(data);
    console.log(data);
});