$(document).ready(function () {
    $('.page-link').click(function (e) { 
        e.preventDefault();
        $(this).addClass('c-page-active').parent().siblings().find('.page-link').removeClass('c-page-active');
    });
    
    $('.detail-arrow').click(function (e) { 
        e.preventDefault();
        $('h1').removeClass('mb-lg-15').addClass('mb-lg-10');
    });
});