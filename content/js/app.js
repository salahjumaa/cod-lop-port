
var swiper = new Swiper(".mySwiper-left", {
  spaceBetween: 40,
  slidesPerView:3,
  loop: "true",
  speed: "5000",
  allowTouchMove:false,
  autoplay: {
    enabled: true,
    delay: 1, 
   },
   breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
   
  },
});
