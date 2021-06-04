// ==UserScript==
// @name         CN - Auto Expand
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.mdbg.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

        var wordLink = document.querySelector('.hanzi a');
        if (wordLink) {
            wordLink.click()
            console.log('>> Auto expand')
        }
})();
