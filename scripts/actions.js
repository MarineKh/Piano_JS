'use strict';

$(document).keypress(function(event) {
    let elem = $('[data-key=' + event.which + ']');

    if(elem.length) {
        let audio = new Audio(PATH + `${elem.data('file')}`);
        audio.play();
    }

    if((elem)[0].tagName == 'BLACK-KEY') {
        elem.addClass('activeBlack');
        setTimeout(function () {
            elem.removeClass('activeBlack')
        }, 100);
    } else {
        elem.addClass('activeWhite');
        setTimeout(function () {
            elem.removeClass('activeWhite')
        }, 100);
    }
});