$(document).ready(function () {
    //pagination
    $('.page-link').click(function (e) { 
        e.preventDefault();
        $(this).addClass('c-page-active').parent().siblings().find('.page-link').removeClass('c-page-active');
    });
    //news1
    $('.detail-arrow,.news1').click(function (e) { 
        e.preventDefault();
        if($(window).width()<992){
            //same mb-10
        }
        else{
            $('h1').removeClass('mb-lg-15').addClass('mb-lg-10');
        };
        $('.newsIndex').addClass('h-fadeToggle');
        setTimeout(() => {
            $('.newsIndex').addClass('d-none');
            $('.detailNews1').removeClass('d-none');
            setTimeout(() => {
                $('.detailNews1').removeClass('h-fadeToggle');
            }, 0.03*1000);
        }, 0.5*1000);
    });
    //back to news index
    $('.backNewsIndex').click(function (e) { 
        e.preventDefault();
        $('.detailNews1').addClass('h-fadeToggle');
        setTimeout(() => {
            $('.detailNews1').addClass('d-none');
            $('.newsIndex').removeClass('d-none');
            setTimeout(() => {
                $('.newsIndex').removeClass('h-fadeToggle');
            }, 0.03*1000);
        }, 0.5*1000);
    });
});