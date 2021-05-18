$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 6,
        autoHeight: true,
        loop: true,
        margin: 30,
        responsive: {
            300: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 5
            }
        }
    });
})


// Can also be used with $(document).ready()
$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
});