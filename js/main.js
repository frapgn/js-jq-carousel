
$('.next').click(function() {
    nextImage();
})

$('.prev').click(function() {
    prevImage();
})

function nextImage() {
    if ( $('.images img.active').hasClass('last') ) {

        $('.images img.active').removeClass('active');
        $('.images img.first').addClass('active');

        // Slider-Nav
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.first').addClass('active');
    } else {
        var imgAttiva = $('.images img.active');
        var prossimaImg = $('.images img.active').next();

        imgAttiva.removeClass('active');
        prossimaImg.addClass('active');

        //
        var pallinoAttivo = $('.slider-nav i.active');
        var prossimoPallino = $('.slider-nav i.active').next();

        pallinoAttivo.removeClass('active');
        prossimoPallino.addClass('active');
    }
}

function prevImage() {
    if ( $('.images img.active').hasClass('first') ) {

        $('.images img.active').removeClass('active');
        $('.images img.last').addClass('active');

        // Slider-Nav
        $('.slider-nav i.active').removeClass('active');
        $('.slider-nav i.last').addClass('active');
    } else {
        var imgAttiva = $('.images img.active');
        var precedenteImg = $('.images img.active').prev();

        imgAttiva.removeClass('active');
        precedenteImg.addClass('active');

        //
        var pallinoAttivo = $('.slider-nav i.active');
        var precedentePallino = $('.slider-nav i.active').prev();

        pallinoAttivo.removeClass('active');
        precedentePallino.addClass('active');
    }
}
