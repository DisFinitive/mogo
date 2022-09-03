$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        if( scrollOffset >= introH ) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }

    });

});