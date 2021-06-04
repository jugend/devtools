// ==UserScript==
// @name         Google Translate Keyboard Shortcuts
// @namespace    https://translate.google.com/
// @version      0.1
// @description  Google Translate Keyboard Shortcuts
// @author       You
// @match        https://translate.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Adding shortcuts');
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'c') {
            const copyButton = document.evaluate("//i[contains(., 'content_copy')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext();
            copyButton.click();
            // copyButton.style.backgroundColor = 'yellow';
            console.log('Text copied');
            // copyButton.style.backgroundColor = 'inherit';
        }
    })
})();
