$(document).ready(function () {
    const vitrine = $('.vitrine').first().html();
    $('#vitrine-2').html(vitrine);

    const swiper = new Swiper(".swiper", {
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            426: {
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 3,
            },
            1025: {
                slidesPerView: 4,
            }
        }

    });

    $('.menu').click(function () {
        $('nav').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
});