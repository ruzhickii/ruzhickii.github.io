$('#slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    appendArrows: $('.buttons'),
    prevArrow: '<div class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'

});