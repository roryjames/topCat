(function($) {
    "use strict"; // Start of use strict

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

})(jQuery); // End of use strict

$(".xo").on('click', function() {
    $(".xo").animate({
        opacity: '0.5'
    });
});