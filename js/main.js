$(function () {
    $('.main_slide').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
    });
});