'use strict';

function changeFontSize(size) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fontSize: size }, null);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.executeScript({
        file: "content.js"
    });

    var buttons = document.getElementsByTagName('button');

    for (var i = 0, l = buttons.length; i < l; i++) {
        buttons[i].addEventListener('click', function() { changeFontSize(this.innerHTML); }, false);
    }

}, false);