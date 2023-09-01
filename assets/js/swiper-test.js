// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// init Swiper:
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1000,
     autoplay: {
       delay: 1000,
       disableOnInteraction: false,
     },
      breakpoints: {
        768: {
          autoplay: {
            enabled: true, //設定為false 為768px 以上時，放棄所有功能；設定為true 為768px 以上時，可調整下列設定
            delay: 5000,
          }
        }
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  