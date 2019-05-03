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

    var button14px = document.getElementById('btn-14px');
    var button16px = document.getElementById('btn-16px');
    var button20px = document.getElementById('btn-20px');
    var button24px = document.getElementById('btn-24px');

    button14px.addEventListener('click', function() { changeFontSize("14px"); }, false);
    button16px.addEventListener('click', function() { changeFontSize("16px"); }, false);
    button20px.addEventListener('click', function() { changeFontSize("20px"); }, false);
    button24px.addEventListener('click', function() { changeFontSize("24px"); }, false);

}, false);
