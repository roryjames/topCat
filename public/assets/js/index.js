$(document).ready(function() {
    $('#play').on('click', function() {
        $.get('/cats');
    })
})