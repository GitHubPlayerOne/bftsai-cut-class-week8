

// core version + navigation, pagination modules:
//import Swiper from 'swiper'; haven't scroll bar
import Swiper from 'swiper/bundle';

// import 'swiper/css/bundle'; already import at all.scss

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
      dragClass: 'swiper-scrollbar-drag',/* 滾動條可拖曳區塊的class 名稱，不可更改 */
      hide: false,
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true, //can't responsive
    breakpoints: {
        992: {
            enabled: true,
            slidesPerView: 2,
            spaceBetween: 24,
            direction: 'horizontal',
            scrollbar:{
                hide: true,
                dragSize: 'auto', //設定swiper-scrollbar-drag 的長度，單位為px
                draggable: true, //設置為true 可用滑鼠拖曳滾動條
            },
        },
        1920: {
            enabled: true, //web need reorganize
            slidesPerView: '3',
            spaceBetween: 24,
            direction: 'horizontal',
        }
    }
});

$(document).ready(function () {
    $('.productPage .btn').click(function (e) { 
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');

    });
    $('.productPage .Diane').click(function (e) { 
        e.preventDefault();
        $('.productPage:nth-child(n+3)').addClass('h-fadeToggle');
        setTimeout(() => {
            $('.productPage:nth-child(n+3)').addClass('d-none');
            $('.productPage.Diane').removeClass('d-none h-fadeToggle');
        }, 8*1000);
    });
    $('.productPage .Felix').click(function (e) { 
        e.preventDefault();
        $('.productPage:nth-child(n+3)').addClass('h-fadeToggle');
        setTimeout(() => {
            $('.productPage:nth-child(n+3)').addClass('d-none');
            $('.productPage.Felix').removeClass('d-none');
            $('.productPage.Felix').delay(1.6*1000).removeClass('h-fadeToggle');
        }, 8*1000);
    });
});