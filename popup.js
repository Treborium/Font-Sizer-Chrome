'use strict';

function changeFontSize(size) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fontSize: size }, null);
    });
}

document.addEventListener('DOMContentLoaded', function () { 
    chrome.tabs.executeScript({
        file: "content.js"
    });

    var button18px = document.getElementById('btn-18px');
    var button20px = document.getElementById('btn-20px');
    var button22px = document.getElementById('btn-22px');
    var button24px = document.getElementById('btn-24px');

    button18px.addEventListener('click', function() { changeFontSize("18px"); }, false);
    button20px.addEventListener('click', function() { changeFontSize("20px"); }, false);
    button22px.addEventListener('click', function() { changeFontSize("22px"); }, false);
    button24px.addEventListener('click', function() { changeFontSize("24px"); }, false);

}, false);
