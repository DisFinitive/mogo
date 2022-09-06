$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


        //  Fixed Header
        checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }

    }



    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("nav__link--active");
        $this.toggleClass("nav__link--active");
        // $this.removeClass("nav__link--active");

        nav.removeClass("nav--active")
        $("#nav_toggle").removeClass("nav-toggle--active")


        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

    });


    // Menu nav toggel

    var nav = $("#nav")

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("nav-toggle--active");
        nav.toggleClass('nav--active');

    });

    // Wedo accordion

    $("[data-collapse]").on("click", function(e) {
        e.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

            $(blockId).slideToggle();

        $this.toggleClass("accordion__item--active");
    });


    // Slider 

    $("[data-slider]").slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});