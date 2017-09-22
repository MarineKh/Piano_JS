(() => {
    'use strict';

    var $btn =  $('.btn'),
        $piano = $('piano'),
        bgColors =  [
            'linear-gradient(#898c62 -10px,#687932 200px)',
            'linear-gradient(#689252 -10px,#c0d08e 200px)',
            'linear-gradient(#39a591 -10px,#486551 200px)',
            'linear-gradient(#357092 -10px,#485e65 200px)',
            'linear-gradient(#3b3592 -10px,#4e4865 200px)',
            'linear-gradient(#923582 -10px,#65485f 200px)',
            'linear-gradient(#923546 -10px,#65484c 200px)',
            'linear-gradient(#454545 -10px,#000 200px)'
        ];

    $btn.click(function() {
        $('.btn.active').removeClass('active');
        $(this).addClass('active');

        $('.frontDiv').css('display', 'none');
        $('.backDiv').css('display', 'block');
    });

    $('.btn.active').click(function() {
        $('.frontDiv').css('display', 'block');
        $('.backDiv').css('display', 'none');
    });

    $('.styles').click(function() {
        $('.container').each(function() {
            $(this).css('background-image', bgColors[Math.floor(Math.random() * bgColors.length)]);
        });
    });

    $('.keyAssist').click(function() {
        if($(this).text() === 'KEY ASSIST OFF') {
            $(this).text('KEY ASSIST ON');
            $piano.addClass('hoverWhite hoverBlack');
        } else {
            $(this).text('KEY ASSIST OFF');
            $piano.removeClass('hoverWhite hoverBlack');
        }
        $('.keyboardKeyWhite').toggleClass('hidden');
        $('.keyboardKeyBlack').toggleClass('hidden');
    });
})();