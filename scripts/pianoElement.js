(() => {
    'use strict';

    let newPiano = new Piano(9);

    let $main = $('<main>'),
        $container = $('<div>', { 'class': 'container' }),
        $headerDiv = $('<div>', { 'class': 'headerDiv' }),
        $keyboardDiv = $('<div>', { 'class': 'keyboardDiv' }),
        $leftDinamic = $('<div>', { 'class': 'leftDinamic' }),
        $menuBar = $('<div>', { 'class': 'menuBar' }),
        $rightDinamic = $('<div>', { 'class': 'rightDinamic' }),
        $frontDiv = $('<div>', { 'class': 'frontDiv' }),
        $backDiv = $('<div>', { 'class': 'backDiv' }),
        $playDiv = $('<div>', { 'class': 'playDiv' }),
        $playButtonSpan = $('<span>', { 'class': 'playButtonSpan', 'text': 'PLAY!' }),
        $keyDiv = $('<div>', { 'class': 'keyDiv' }),
        $keySpanTop = $('<span>', { 'class': 'keySpanTop', 'text': 'PRESS A KEY' }),
        $keySpanBottom = $('<span>', { 'class': 'keySpanBottom', 'text': 'YOUR KEYBOARD:' }),
        $horizontalLine = $('<hr>', { 'class': 'horizontal' }),
        $verticalLine = $('<hr>', { 'class': 'vertical' }),
        $tabPiano = $('<div>', { 'class': 'tabPiano' }),
        $playButton = $('<button>', { 'class': 'btn active', 'text': 'Just Play' }),
        $menuButton = $('<button>', { 'class': 'btn', 'text': 'Menu' }),
        $musicSheet = $('<a>', { 'class': 'musicSheet', 'text': 'MUSIC SHEET', 'href': 'https://virtualpiano.net/category/music-sheets/', 'target': '_blank'}),
        $keyAssist = $('<div>', { 'class': 'keyAssist', 'text': 'KEY ASSIST OFF' }),
        $styles = $('<div>', { 'class': 'styles', 'text': 'STYLES' }),
        $about = $('<a>', { 'class': 'about', 'text': 'ABOUT', 'href': 'https://virtualpiano.net/about-virtual-piano-2/', 'target': '_blank' });

        $playDiv.append($playButtonSpan);
        $keyDiv.append($keySpanBottom, $keySpanTop);
        $frontDiv.append($verticalLine, $playDiv, $keyDiv);

        $backDiv.append($musicSheet, $keyAssist, $styles, $about);
        $tabPiano.append($playButton, $menuButton);
        $menuBar.append($horizontalLine, $frontDiv, $backDiv, $tabPiano);

        $headerDiv.append($leftDinamic, $menuBar, $rightDinamic);
        $keyboardDiv.append(newPiano.elem);
        $container.append($headerDiv, $keyboardDiv);

        $main.append($container);
        $(document.body).append($main);


    
})();