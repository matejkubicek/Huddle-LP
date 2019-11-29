$(function () {
    // Smooth scrolling
    $('a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 'slow');
        return false;
    });

    // Change navbar background after scroll

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 30) {
            $('.nav').css({'background': 'rgba(235, 251, 255, 0.97)', 'box-shadow': '0 0 8px rgba(0, 0, 0, 0.15)'});
        } else {
            $('.nav').css({'background': 'none', 'box-shadow': 'none'});
        }
    })

});
