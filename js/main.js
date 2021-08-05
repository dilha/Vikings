$(function () {

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('active');
        $('.menu__btn').toggleClass('active');
    });


    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 1,
            showinfo: 1
        }
    });

    $('.heroes__slider_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider_text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-rigth.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.heroes__slider_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.heroes__slider_img',
        arrows: false
    });

});
