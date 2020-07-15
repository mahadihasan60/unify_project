$(function () {


    //====   search icon ====// 
    $('.search_icon input').click(function () {
        $(".search_icon input").toggleClass("active");
    });
    $('.search_icon input').click(function () {
        $(".search_icon").toggleClass("active");
    });



    //====   preloader ====// 
    $(window).load(function () {
        $("#preloader").delay(500).fadeOut(500);
    })


    //====  sticky menu ====// 
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });


    //====  banner slider ====/
    $('.banner_wrapper').slick({
        dots: true,
        vertical: false,
        infinite: false,
        speed: 1000,
        fade: false,
        autoplay: true,
        arrows: true,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow',
        pauseOnHover: true,

    })


    //==== close button mobile menu ====//  
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });



    //====portfolio  mixitup ====/
    var mixer = mixitup('#portfolio_part');




    //====  TESTIMONIALS & BLOG SLIDER ====/
    $('.test_blog_wrapper').slick({
        dots: true,
        vertical: false,
        infinite: false,
        speed: 1000,
        fade: false,
        autoplay: true,
        arrows: false,
        pauseOnHover: true,

    })

    
    //====  BUSINESS LOGO SLIDER ====/
    $('.business_logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        vertical: false,
        infinite: false,
        speed: 1000,
        fade: false,
        autoplay: true,
        arrows: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
            }
	  }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
	  }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
	  }, ]

    })
    
    
    //====  SmoothScroll ====/
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });
    
    

    //====  counterUp ====/ 
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

});
