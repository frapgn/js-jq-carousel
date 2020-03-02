// Dopo il click vai all'immagine successiva
$('.next').click(function() {
    nextImage();
})

// Dopo il click vai all'immagine precedente
$('.prev').click(function() {
    prevImage();
})

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
    return loop; //Ritorno l'interval creato
}
// Start interval
loop = slideshowLoop(loop, 3000); //Assegno il nuovo valore a loop con dentro l'interval
// Ferma il loop dopo un certo numero di millisecondi
stopSlideshowAutoplay(loop, 37000);

// play/pause button
$('.slider-nav .fa-pause-circle').click(function() {
    clearInterval(loop);
    $('.slider-nav .fa-pause-circle').addClass('hidden');
    $('.slider-nav .fa-play-circle').removeClass('hidden');
})

$('.slider-nav .fa-play-circle').click(function() {
    loop = slideshowLoop(loop, 3000);
    $('.slider-nav .fa-play-circle').addClass('hidden');
    $('.slider-nav .fa-pause-circle').removeClass('hidden');
})

// mouseleave --> play / mouseenter --> pause
$('.slideshow').mouseenter(function() {
    clearInterval(loop);
})

$('.slideshow').mouseleave(function() {
    loop = slideshowLoop(loop, 3000);
})
// VECCHIO CODICE NON FUNZIONANTE
// Ferma il loop dopo un certo numero di millisecondi
// stopSlideshowAutoplay(loop, 6000); // passa un valore in ms

// Ogni immagine vieve visualizzata per un certo numero di millisecondi
// slideshowLoop(loop, 3000); // passa un valore in ms

// var loop;
//
// function stopSlideshowAutoplay(loop, msDuration) {
//     setTimeout(function() {
//         clearInterval(loop);
//     }, msDuration);
// }
//
// function slideshowLoop(loop, msDuration) {
//     loop = setInterval(function() {
//         nextImage();
//     }, msDuration);
// }

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


// SUPPORTO DI NIKOLAS

// prova una cosa di questo tipo
// // FUNZIONI
// var loop;
// function stopSlideshowAutoplay(loop, msDuration) {
//     setTimeout(function() {
//         clearInterval(loop);
//     }, msDuration);
// }
// function slideshowLoop(loop, msDuration) {
//     loop = setInterval(function() {
//         nextImage();
//     }, msDuration);
//     // Ferma il loop dopo un certo numero di millisecondi
//     stopSlideshowAutoplay(loop, 6000);
// }
// // Start interval
// slideshowLoop(loop, 3000);
// 5:33
// il problema del codice che hai è che loop è dichiarato dopo aver chiamato le funzioni.. e lo start e stop vengono richiamate una dopo l'altra.. ma essendo asincrone le timing function la variabile loop non è stata ancora definita
// 5:34
// ti lascio un'altra alternativa
// 5:34
// // FUNZIONI
// var loop;
// function stopSlideshowAutoplay(loop, msDuration) {
//     setTimeout(function() {
//         clearInterval(loop);
//     }, msDuration);
// }
// function slideshowLoop(loop, msDuration) {
//     loop = setInterval(function() {
//         nextImage();
//     }, msDuration);
//     return loop; //Ritorno l'interval creato
// }
// // Start interval
// loop = slideshowLoop(loop, 3000); //Assegno il nuovo valore a loop con dentro l'interval
// // Ferma il loop dopo un certo numero di millisecondi
// stopSlideshowAutoplay(loop, 6000);
