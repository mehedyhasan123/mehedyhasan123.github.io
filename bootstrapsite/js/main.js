$(document).ready(function(){
    $('.slider-active').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        dots:true,
        smartSpeed: 1000,
        nav:true,
        navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause: true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200: {
                items: 1
            }
        }
    });
    
    $(".slider-active").on("translate.owl.carousel", function() {
        $(".slider-content h1").removeClass("animated bounceInDown slow").css("opacity", "0");
        $(".slider-content p,.slider-content a").removeClass("animated lightSpeedIn slow").css("opacity", "0");
        $(".slider-content .default-btn").removeClass("animated lightSpeedIn slow").css("opacity", "0");
    });
    $(".slider-active").on("translated.owl.carousel", function() {
        $(".slider-content h1").addClass("animated bounceInDown slow").css("opacity", "1");
        $(".slider-content p,.slider-content a").addClass("animated lightSpeedIn slow").css("opacity", "1");
        $(".slider-content .default-btn").addClass("animated lightSpeedIn").css("opacity", "1");
    });
});

