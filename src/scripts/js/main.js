$(document).ready(function() {
    new WOW({
        offset: 50,
    }).init();
    // $('header').scrollToFixed({
    //     zIndex: 1000,
    // });
    if ($(window).width() > 991) {
        $('.fly-menu').scrollToFixed({
            marginTop: $('header').outerHeight() + 20,
            limit: function limit() {
                return $('.product-other').offset().top - $('.fly-menu').outerHeight() - 40;
            },
            zIndex: 50
        });
    }
    $('[data-toggle="tooltip"]').tooltip()
        // $(".TickerNews").newsTicker();
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.up').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 700);
    });
    $(".counter").countimator({
        duration: 1000,
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // MENU
    if ($(window).width() < 992) {
        $('.login').insertAfter('.menulink');
    }

    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('html').css('overflow', 'hidden');
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function() {
        $(this).siblings('.sub').slideToggle(300);
    });
    // $('.searchtoggle').click(function() {
    //     $('.search').toggleClass('open');
    //     $('.overlay').fadeIn(500);
    //     $('html').css('overflow', 'hidden');
    // });
    // $('.btn-closesearch').click(function() {
    //     $('.search').removeClass('open');
    //     $('.overlay').fadeOut(500);
    //     $('html').css('overflow', 'auto');
    // });
    // if ($(window).width() < 1200) {
    //     $('header .cart').insertAfter('header .search');
    // }
    // if ($(window).width() < 768) {
    //     $('header .login').insertAfter('header .menuwrap');
    // }
    // END-MENU

    $('.btn-apply').click(function() {
        $('.apply-form').slideToggle(300);
    });
    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });

    // FILTER SCRIPT

    // $('.btn-showsubfilter').click(function() {
    //     $(this).toggleClass('active');
    //     $(this).siblings('.sub').slideToggle(300);
    // });
    // $('.btn-showcate').click(function() {
    //     $(this).toggleClass('active');
    //     $('.btn-showfilter').removeClass('active');
    //     $('.option-group').removeClass('open');
    //     $('.category-group').toggleClass('open');
    //     // $('html').css('overflow', 'hidden');
    // });
    // $('.btn-showfilter').click(function() {
    //     $(this).toggleClass('active');
    //     $('.btn-showcate').removeClass('active');
    //     $('.category-group').removeClass('open');
    //     $('.option-group').toggleClass('open');
    //     // $('html').css('overflow', 'hidden');
    // });
    // $('.btn-closefilter').click(function() {
    //     $('.btn-showcate').removeClass('active');
    //     $('.btn-showfilter').removeClass('active');
    //     $('.filter-wrap').removeClass('open');
    //     // $('html').css('overflow', 'auto');
    // });

    $('.faqtitle').click(function() {
        $(this).siblings('.faqcontent').slideToggle(300);
    });

    // USER
    // $('.user-sidebar').click(function() {
    //     $('.user-sidelink').slideToggle(300);
    // });

    // $('#btn-changepw').click(function() {
    //     $('.changepw-form').slideToggle(300);
    // });

    // PRODUCT SCRIPT
    // if ($(window).width() < 576) {
    //     $('.product-info .product-name').insertBefore('.product-page .slidewrap .product-slide');
    //     $('.product-info .promotion').insertAfter('.product-page .slidewrap .product-name');
    //     $('.product-info .product-overview').insertBefore('.product-page .product-info .share');
    // }


    // SLIDE
    $('.social-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: false,
        dots: false,
        arrows: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 543,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // $('.brand-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 500,
    //     autoplay: false,
    //     arrows: true,
    //     dots: false
    // });

    // $('.home-product-slide').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     dots: false,
    //     swipe: true,
    //     swipeToSlide: true,
    //     infinite: false,
    //     arrows: true,
    //     responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 5,
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 543,
    //             settings: {
    //                 slidesToShow: 2,
    //                 vertical: false,
    //                 verticalSwiping: false
    //             }
    //         }
    //     ]
    // });

    // $('.cart-lastview-slide').slick({
    //     slidesToShow: 7,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     dots: false,
    //     swipe: true,
    //     swipeToSlide: true,
    //     infinite: false,
    //     arrows: true,
    //     responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 6,
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 5,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 543,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         }
    //     ]
    // });

    // $('.bannerads').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     dots: false,
    //     arrows: true,
    //     speed: 500,
    // });

    // // PRODUCT SLIDE

    // $('.product-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     infinite: false,
    //     fade: true,
    //     asNavFor: '.product-nav'
    // });
    // $('.product-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.product-slide',
    //     dots: false,
    //     focusOnSelect: true,
    //     infinite: false,
    //     swipe: true,
    //     swipeToSlide: true,
    //     vertical: true,
    //     verticalSwiping: true,
    //     responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 543,
    //             settings: {
    //                 slidesToShow: 5,
    //                 vertical: false,
    //                 verticalSwiping: false
    //             }
    //         }
    //     ]
    // });
    // $('.lastview-slide').slick({
    //     slidesToShow: 10,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     speed: 500,
    //     responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 8,
    //             }
    //         }, {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 7,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 5,
    //             }
    //         },
    //         {
    //             breakpoint: 543,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         }
    //     ]
    // });

    // CART PAGE SCRIPT

    $('.removenotice').click(function() {
        $('.cartnotice').slideToggle(300);
    });

    $('#btn-ttmh').click(function() {
        $('.user-info').slideToggle(300);
    });
    $('#btn-xuathd').click(function() {
        $('.bill-form').slideToggle(300);
    });

    $('#ship1').click(function() {
        $('#ship1-popup').show(300);
        $('#ship2-popup').hide(300);
    });
    $('#ship2').click(function() {
        $('#ship2-popup').show(300);
        $('#ship1-popup').hide(300);
    });

    $('.btn-spin').click(function() {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);

    });
});

// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function() {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'hermes',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 20,
                    space: 10,

                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200

                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1600, 1024, 768, 575],
            gridheight: [450, 400, 300, 300],
            lazyType: "none",
            // parallax: {
            //     type: "scroll",
            //     origo: "slidercenter",
            //     speed: 50,
            //     levels: [5000]
            // },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
})