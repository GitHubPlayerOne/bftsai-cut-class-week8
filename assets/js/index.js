// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 24,
    enabled: false, //let swiper disable
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar', /* 整個滾動條的class 名稱，不可更改 */
      hide: false, //設置為true 使用戶滑動離開時隱藏滾動條
      dragSize: 'auto', //設定swiper-scrollbar-drag 的長度，單位為px
      draggable: true, //設置為true 可用滑鼠拖曳滾動條
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true, //can't responsive
    breakpoints: {
      992: {
        enabled: true, //web need reorganize
        direction: 'horizontal',
        slidesPerView: '3',
        spaceBetween: 24,

        scrollbar: {
          el: '.swiper-scrollbar', /* 整個滾動條的class 名稱，不可更改 */
          dragSize: 'auto', //設定swiper-scrollbar-drag 的長度，單位為px
          draggable: true, //設置為true 可用滑鼠拖曳滾動條
        },
      },
    }
  });
  
  $(document).ready(function () {
    if(jQuery(window).width()>=992){
      $('.carousel').removeAttr('data-bs-ride',"carousel");
    }
    else{
      $('.carousel').attr('data-bs-ride',"carousel");
    }
  });