$(function() {
    // scroll to top at page refresh
    history.scrollRestoration = 'manual';
    $(window).on('beforeunload', function(){
          $(window).scrollTop(0);
    });
    
    // header
    var header = $('header'),
        header_menu_open = header.find('.menu_open'),
        header_menu_close = header.find('.menu_close'),
        header_gnb = header.find('.gnb_wrap');

    // header menu open
    header_menu_open.on('click', function() {
        $('body').addClass('header_active');
        header.addClass('active');
        header_gnb.scrollTop(0);
    });

    // header menu close
    header_menu_close.on('click', function() {
        $('body').removeClass('header_active');
        header.removeClass('active');
    });

    // footer
    var footer = $('footer'),
        footer_util_wrap = footer.find('.footer_util_wrap'),
        footer_top = footer.find('.scroll_top');

    // footer top
    footer_top.on('click', function() {
        $('html, body').animate({ scrollTop:0 }, 400);
        return false;
    });

    // scroll event
    $(window).on('scroll', function() {
        var scroll_top = $(window).scrollTop(),
            window_height = window.innerHeight,
            scroll_bottom = scroll_top + window_height,
            header_height = header.outerHeight(),
            footer_offset_top = footer.offset().top;
        // header on scrolled
        if(scroll_top > header_height) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
        // footer on bottom
        if(scroll_bottom > footer_offset_top) {
            footer_util_wrap.addClass('sticky');
        } else {
            footer_util_wrap.removeClass('sticky');
        }
    });

    // swiper basic
    $('.swiper').each(function() {
        var swipe = $(this).find('.swiper-container');
        swiper = new Swiper(swipe, {
            slidesPerView: 'auto',
            navigation: {
                prevEl: $(this).find('.swiper-button-prev'),
                nextEl: $(this).find('.swiper-button-next'),
            },
            pagination: {
                el: $(this).find('.swiper-pagination'),
                clickable: true,
            },
        });
    });

    // swiper loop
    $('.swiper_loop').each(function() {
        var swipe = $(this).find('.swiper-container');
        swiper = new Swiper(swipe, {
            slidesPerView: 'auto',
            loop: true,
            navigation: {
                prevEl: $(this).find('.swiper-button-prev'),
                nextEl: $(this).find('.swiper-button-next'),
            },
            pagination: {
                el: $(this).find('.swiper-pagination'),
                clickable: true,
            },
        });
    });
});

// loading
$(window).on('load', function() {
    setTimeout(function() {
        $('.loading').addClass('complete');
    }, 300);
});
