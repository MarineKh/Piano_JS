'use strict';

function Octave(octave) {
    Object.defineProperties(this, {
        elem:{
            value: $('<octave>')
        }
    });

    for(let i in octave) {
        if(octave[i].isWhite) {
            this.elem.append(new WhiteKey(octave[i]).elem);
        } else {
            this.elem.append(new BlackKey(octave[i]).elem);
        }
    }
}
