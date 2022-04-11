

// ?Swiper JS
const swiper = new Swiper(".swiper", {
  // ?Optional parameters
  direction: "horizontal",
  loop: true,
  // ?If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    // type: 'progressbar',
  },

  // ?Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // ?And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 5,
    },
  },
  slidesPerView: 5,
  spaceBetween: 20,
});