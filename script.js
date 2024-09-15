$(document).ready(function(){
    // Toggle submenu visibility
    $('.has-children > a').click(function(e) {
        e.preventDefault();
        $(this).siblings('.submenu').slideToggle();
    });
});
