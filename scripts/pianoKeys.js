'use strict';

const PATH = 'content/audios/';

function WhiteKey(key) {
    Object.defineProperties(this, {
        elem:{
            value: $('<white-key data-key=' + key.keyCode + ' data-file=' + key.fileName + '>')
        },
        key: {
            value: key
        }
    });

    let elem = this.elem;

    elem.append($('<span class="keyboardKeyWhite hidden">').text(key.keyboardKey));
    this.elem.click(function() {
        let audio= new Audio(PATH + `${key.fileName}`);
        audio.play();
    });
}

function BlackKey(key) {
    Object.defineProperties(this, {
        elem:{
            value: $('<black-key data-key=' + key.keyCode + ' data-file=' + key.fileName +'>')
        },
        key: {
            value: key
        }
    });

    let elem = this.elem;

    elem.append($('<span class="keyboardKeyBlack hidden">').text(key.keyboardKey));
    this.elem.click(function() {
        let audio= new Audio(PATH + `${key.fileName}`);
        audio.play();
    });
}