'use strict';

function Piano(octaveCount) {
    Object.defineProperties(this, {
        elem:{
            value: $('<piano>')
        }
    });

    for(let i in pianoJson) {
        this.elem.append(new Octave(pianoJson[i]).elem);
    }
}