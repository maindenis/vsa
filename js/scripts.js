function getAnimate() {
    $("#vsaHeader").addClass("animate");
    $(".vsa_promo_bottom_row").addClass("animate");
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {
    getAnimate();
    // -----------
    if($('.owl-carousel-background').length > 0) {
        $('.owl-carousel-background').owlCarousel({
            loop:true, //Зацикливаем слайдер
            margin:0, //Отступ от элемента справа в 50px
            nav:false, //Отключение навигации
            autoplay:true, //Автозапуск слайдера
            smartSpeed:1000, //Время движения слайда
            autoplayTimeout:5000, //Время смены слайда
            lazyLoad: true,
            lazyLoadEager: 2, //preload 3 items
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
    }

    if($('.vsa_items_slider').length > 0) {
     $('.vsa_items_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        lazyLoadEager: 3,
        video: false,
        dots: false,
        autoWidth:true,
        responsiveClass:false,
    });
    }

    if($('.vsa_portfolio_slider').length > 0) {
     $('.vsa_portfolio_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        lazyLoadEager: 3,
        video: false,
        dots: false,
        autoWidth:true,
        responsiveClass:false
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
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        lazyLoadEager: 3,
        video: false,
        dots: false,
        autoWidth:true,
        responsiveClass:false
    });
    }

    // -------------

    $(".vsa_scroll_down").on("click", function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
          'scrollTop': $(window).height() + "px"
        }, 1000);
    });

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

});