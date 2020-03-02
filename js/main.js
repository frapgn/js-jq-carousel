// Dopo il click vai all'immagine successiva
$('.next').click(function() {
    nextImage();
})

// Dopo il click vai all'immagine precedente
$('.prev').click(function() {
    prevImage();
})

// Ogni immagine vieve visualizzata per un certo numero di millisecondi
slideshowLoop(loop, 3000); // passa un valore in ms

// Ferma il loop dopo un certo numero di millisecondi
stopSlideshowAutoplay(loop, 6000); // passa un valore in ms


// FUNZIONI
var loop;

function stopSlideshowAutoplay(loop, msDuration) {
    setTimeout(function() {
        clearInterval(loop);
    }, msDuration);
}

function slideshowLoop(loop, msDuration) {
    loop = setInterval(function() {
        nextImage();
    }, msDuration);
}

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

        //Slider-Nav
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
