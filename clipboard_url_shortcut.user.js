// ==UserScript==
// @name         Right Click to Jump to Clipboard URL Directly
// @namespace    http://20130213.net/
// @version      1.0
// @description  Right click to jump to the URL in clipboard directly/右鍵跳轉到剪貼簿網址
// @author       20130213
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to jump to the URL in clipboard
    function jumpToClipboardURL() {
        navigator.clipboard.readText().then(text => {
            if (text.startsWith('http://') || text.startsWith('https://')) {
                window.location.href = text;
            } else {
                alert('剪貼簿中的內容不是有效的網址：' + text);
            }
        }).catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
    }

    // Add event listener for right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Prevent the default context menu
        jumpToClipboardURL();
    });
})();
