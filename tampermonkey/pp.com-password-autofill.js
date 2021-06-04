// ==UserScript==
// @name         PP - Auto-fill password field
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      /^https?:\/\/(localhost|(.*\.)?stage|.*\.qa)\.paypal\.com(:.*)?\/.*signin.*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('>> Tampermonkey - Auto-fill password');
    const pwdEl = document.getElementById('password');
    if (!pwdEl.value) {
      pwdEl.value = 'some-value';
    }
})();
