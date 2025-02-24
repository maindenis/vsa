function getAnimate() {
    $("#vsaHeader").addClass("animate");
    $(".vsa_promo_bottom_row").addClass("animate");
}

function getRespParams() {
    if(bodyWidth <= 768) {
        if($(document).scrollTop() > 100) {
            $("#vsaHeader").addClass("scroll");
        } else {
            $("#vsaHeader").removeClass("scroll");
        }
    }
}

// function getLineParams() {
//     $("#line > div").css({
//         "height" : "auto"
//     });
//     topCoord = $(".vsa_promo_slider .vsa_promo_slide:eq(0) .vsa_promo_slide_contant").offset().top;
//     $("#line > div").css({
//         "height" : topCoord + "px"
//     });
// }

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
var topCoord;
$(window).resize(function() {
    getRespParams();
    // getLineParams();
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
});

$(document).scroll(function() {
    getRespParams();
});

$(document).ready(function() {
    getAnimate();
    getRespParams();
    // getLineParams();
    // -----------
    if($('.owl-carousel-background').length > 0) {
        $('.owl-carousel-background').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:5000,
            lazyLoad: true,
            lazyLoadEager: 2,
            animateIn: "owl-fadeIn",
            animateOut: "owl-fadeOut",
            video: true,
            dots: false,
            autoWidth:true
        });
    }
    
    if($('.owl-carousel-topics').length > 0) {
     $('.owl-carousel-topics').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:30, //Отступ от элемента справа в 50px
        nav:false, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:3000, //Время смены слайда
        autoplayHoverPause:true,
        lazyLoadEager: 3, //preload 3 items
        video: true,
        dots: false,
        autoWidth:false,
        responsiveClass:true,
        responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
//                      , loop:true
                }
            }
        });
 }

    if($('.vsa_promo_slider').length > 0) {    
    $('.vsa_promo_slider').on('initialized.owl.carousel', event => {
        // getLineParams();
        $("#line > div").css({
            "height" : "auto"
        });
        topCoord = $(".vsa_promo_slider .vsa_promo_slide:eq(0) .vsa_promo_slide_contant").offset().top;
        $("#line > div").css({
            "height" : topCoord + "px"
        });
    });
     $('.vsa_promo_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:15000,
        autoplayHoverPause:false,
        lazyLoadEager: 1,
        video: false,
        dots: false,
        autoWidth:false,
        responsiveClass:false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        singleItem: true
    });
    $('.vsa_promo_slider').on('changed.owl.carousel', event => {
        // getLineParams();
        $("#line > div").css({
            "height" : "auto"
        });
        topCoord = $(".vsa_promo_slider .owl-item.active .vsa_promo_slide_contant").offset().top;
        $("#line > div").css({
            "height" : topCoord + "px"
        });
    });
    $('.vsa_promo_slider').on('resize.owl.carousel', event => {
        // getLineParams();
        $("#line > div").css({
            "height" : "auto"
        });
        topCoord = $(".vsa_promo_slider .owl-item.active .vsa_promo_slide_contant").offset().top;
        $("#line > div").css({
            "height" : topCoord + "px"
        });
    });
    $('.vsa_promo_slider').on('resized.owl.carousel', event => {
        // getLineParams();
        $("#line > div").css({
            "height" : "auto"
        });
        topCoord = $(".vsa_promo_slider .owl-item.active .vsa_promo_slide_contant").offset().top;
        $("#line > div").css({
            "height" : topCoord + "px"
        });
    });

    }

    if($('.vsa_items_slider').length > 0) {

    initVSAItemsSlider();

    $(window).resize(function() {
        $('.vsa_items_slider').trigger('destroy.owl.carousel');
        initVSAItemsSlider();
    });

    function initVSAItemsSlider() {
        $('.vsa_items_slider').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            autoplay:true,
            smartSpeed:1000,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
            lazyLoadEager: 3,
            video: false,
            dots: false,
            autoWidth:true,
            items:1,
            responsiveClass:false,
            // onResized: owlres,
            responsive:{
                0:{
                    margin:20,
                    dots: true,
                    rtl: true,
                    autoWidth:false,
                    items:1,
                },
                450:{
                    margin:20,
                    dots: true,
                    rtl: true,
                    autoWidth:true,
                    items:1,
                },
                900:{
                    margin:30,
                    dots: false,
                    rtl: false,
                    autoWidth:true,
                    items:1,
                }
            }
        });
    }
     $('.vsa_items_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        lazyLoadEager: 3,
        video: false,
        dots: false,
        autoWidth:true,
        items:1,
        responsiveClass:false,
        // onResized: owlres,
        responsive:{
        0:{
            margin:20,
            dots: true,
            rtl: true,
            autoWidth:false,
            items:1,
        },
        450:{
            margin:20,
            dots: true,
            rtl: true,
            autoWidth:true,
            items:1,
        },
        900:{
            margin:30,
            dots: false,
            rtl: false,
            autoWidth:true,
            items:1,
        }
    }
    });

    // function owlres() {
    //     $('.vsa_items_slider').trigger('resize.owl.carousel');
    //     $('.vsa_items_slider').trigger('refresh.owl.carousel');
    //     // console.log('owlres');
    // }
    }

    if($('.vsa_portfolio_slider').length > 0) {
     $('.vsa_portfolio_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        lazyLoadEager: 3,
        video: false,
        dots: false,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{ 
                rewind: true,
                slideTransition: 'linear',
                autoplaySpeed: 11000,
                smartSpeed: 11000,      
            },
            900:{
                smartSpeed:1000,
                autoplayTimeout:2500,
                slideTransition: false,
                rewind: false,
            }
        }
    });
    }

    if($('.vsa_portfolio_slider_rtl').length > 0) {
     $('.vsa_portfolio_slider_rtl').owlCarousel({
        loop:true,
        margin:10,
        rtl:true,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        lazyLoadEager: 3,
        video: false,
        dots: false,
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            0:{ 
                rewind: true,
                slideTransition: 'linear',
                autoplaySpeed: 11000,
                smartSpeed: 11000,      
            },
            900:{
                smartSpeed:1000,
                autoplayTimeout:2500,
                slideTransition: false,
                rewind: false,
            }
        }
    });
    }

    // -------------

    $(".vsa_scroll_down").on("click", function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
          'scrollTop': $(".vsa_promo").height() + "px"
        }, 1000);
    });

    // --------------

    $(".resp_btn").click(function(e) {
      e.preventDefault();
      if( $(".respNavBox").is(":hidden") ) {
          $(".respNavBox").fadeIn(300);
          $(this).addClass("active");
      } else {
          $(".respNavBox").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $(".respNavBox").is(":visible") &&
            bodyWidth <= 767) {
                $(".respNavBox").fadeOut(300);
                $(".resp_btn").removeClass("active");
        }
    });

    $(".closeNav").click(function(e) {
        e.preventDefault();
        $(".respNavBox").fadeOut(300);
        $(".resp_btn").removeClass("active");
    });

    // ------------

    var image = document.getElementsByClassName('avs_article_2_bg');
    new simpleParallax(image);

});