$(document).ready(function() {
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        var slideTo = $(e.relatedTarget).index();
        console.log("slideTo :",slideTo );
        $('.custom-indicators li').removeClass('active').css({ visibility: "hidden" }).eq(slideTo).addClass('active').css({ visibility: "visible" });

        // .css({ display: "block" })
        // visibility: hidden

        // .css({ visibility: "hidden" })
        // .css({ visibility: "visible" })

        // visibility: visible;
    });

    $('.custom-indicators li').click(function() {
        var slideTo = $(this).index();
        $('#carouselExample').carousel(slideTo);
    });
});
