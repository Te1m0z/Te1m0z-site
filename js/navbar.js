$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 70){
            $('.navbar__inner').addClass('fixed');
        }else{
            $('.navbar__inner').removeClass('fixed');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    $('.about-btn').click(function(){
        $('html').animate({scrollTop: 820});
        $('.navbar__inner').removeClass('active');
        $('.mobile-menu').removeClass("active");
        $('.navbar__list').removeClass("active");
        $('.menu-btn i').removeClass("active");
    })

    $('.skills-btn').click(function(){
        $('html').animate({scrollTop: 1878});
        $('.navbar__inner').removeClass('active');
        $('.mobile-menu').removeClass("active");
        $('.navbar__list').removeClass("active");
        $('.menu-btn i').removeClass("active");
    })

    $('.contact-btn').click(function(){
        $('html').animate({scrollTop: 2920});
        $('.navbar__inner').removeClass('active');
        $('.mobile-menu').removeClass("active");
        $('.navbar__list').removeClass("active");
        $('.menu-btn i').removeClass("active");
    })

    $('.menu-btn').click(function(){
        $('.navbar__list').toggleClass("active");
        $('.navbar__inner').toggleClass("active");
        $('.mobile-menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed = new Typed(".typing", {
        strings: ["Study", "Anime", "Develop", "Games"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    })
});


$(window).scroll(function(){
    $('.about').css({'top': -$(window).scrollTop()/2})
})