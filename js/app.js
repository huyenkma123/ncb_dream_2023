
$(document).ready(function(){
    $('.item-menu').click(function () {
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
    $('.slide-artist').slick({
        dots: true,
        arrows: false,
        // infinite: true,
        speed: 300,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.slide-user-story').slick({
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 3000,

    });
});