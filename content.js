var paragraphs = document.getElementsByTagName('p');

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        for (var i = 0, l = paragraphs.length; i < l; i++) {
            paragraphs[i].style.fontSize = request.fontSize;
        }
    }
);