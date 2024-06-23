

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});
if (window.matchMedia('(min-width: 768px)').matches) {
    swiper.destroy(); // Уничтожаем слайдер
}