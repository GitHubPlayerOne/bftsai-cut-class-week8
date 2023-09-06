// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.productDianeswiper', {
    // Optional parameters
    //loop: true,
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 24,
    enabled: false, //let swiper disable
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true, //can't responsive
    breakpoints: {
        992: {
            enabled: true,
            slidesPerView: 3,
            spaceBetween: 24,
            direction: 'horizontal',
            scrollbar:{
                dragSize: 'auto', //設定swiper-scrollbar-drag 的長度，單位為px
                draggable: true, //設置為true 可用滑鼠拖曳滾動條
            },
        },
    }
});
  