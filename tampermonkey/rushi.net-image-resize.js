// ==UserScript==
// @name         Rushi.net Increase image size
// @namespace    https://www.rushi.net/Home/works/detail
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.rushi.net/Home/works/detail
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        if (img.src.includes('700')) {
            console.log('>> resize image', img.src);
            img.src = img.src.split('?')[0]
            img.classList.remove('smallpic');
        }
    })
})();
