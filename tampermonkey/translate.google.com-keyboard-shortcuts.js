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

    const clickButton = (xpath) => {
        const button = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null ).iterateNext();
        console.log('button', button);
        if (button) {
            button.click();
        }
    }


    const onKeyDown = (e, xpath, keyCode, message, actionCallback) => {
        if (e.ctrlKey && e.key === keyCode) {
            if (actionCallback) {
                actionCallback();
            } else {
                clickButton(xpath);
            }
            console.log(message);
        }
    }

    document.addEventListener('keydown', (e) => {
        onKeyDown(e, '//i[contains(., \'content_copy\')]', 'c', 'Text copied');
        onKeyDown(e, '(//span[contains(., \'volume_up\')])[8]', 'v', 'Pronounce the word');
        onKeyDown(e, null, 'f', 'Focus on textarea', () => {
            document.querySelector('textarea').focus();
        });
    })
})();)();
