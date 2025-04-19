$(document).ready(function () {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 4,
        spaceBetween: 5,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            425: {
                slidesPerView: 2,
            }
        }
    });
});

$(document).ready(function () {
    $('.menu').click(function () {
        $('nav').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    })
});