// JavaScript Document; 도형컬러 수정

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });


    //skill - easyPieChart
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.chart').each( function(i){
    
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){

                $('.chart').easyPieChart({
                    barColor: '#484653',  /*원형 color변경하는곳*/
                    trackColor: '#F1CD5B',/*track color변경하는곳*/
                    scaleColor: '#fff',
                    lineCap: 'round',
                    lineWidth: 15,
                    size: 200,
                    animate: 2000,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent)); }
                });
             }
        }); 
    });
    

});

// popup
    $('.art1').click(function () {
        $('.pop1').fadeIn();
    });
    $('.art2').click(function () {
        $('.pop2').fadeIn();
    });
    $('.art3').click(function () {
        $('.pop3').fadeIn();
    });


    $('.art4').click(function () {
        $('.pop4').fadeIn();
    });
    $('.art5').click(function () {
        $('.pop5').fadeIn();
    });
    $('.art6').click(function () {
        $('.pop6').fadeIn();
    });
    $('.popup i').click(function () {
        $('.popup').fadeOut();
    });

swiperInstance = new Swiper('.cardnews', {
    slidesPerView: 2,       // ✅ 추가
    spaceBetween: 10,       // ✅ 슬라이드 간 간격
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    threshold: 10,
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        0: {
            slidesPerView: 1
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector('.popup.pop1');
    const openButtons = document.querySelectorAll('.artbox .art1');
    const closeBtn = popup.querySelector('.ion-close-round');

    let swiperInstance;

    function openPopup() {
        popup.classList.add('active');
        popup.style.display = 'flex';

        // if (!swiperInstance) {
        //     swiperInstance = new Swiper('.cardnews', {
        //         pagination: {
        //             el: '.swiper-pagination',
        //             clickable: true
        //         },
        //         grabCursor: true,
        //         threshold: 10
        //     });
        // }
    }

    function closePopup() {
        popup.classList.remove('active');
        popup.style.display = 'none';
    }

    openButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            openPopup();
        });
    });

    closeBtn.addEventListener('click', closePopup);
    popup.addEventListener('click', function (e) {
        if (e.target === popup) closePopup();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
});



			$(function() {
				$('a[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				$('html, body').animate({
				scrollTop: target.offset().top
				}, 500);//움직이는 시간 조정
				return false;
				}
				}
				});
				});

