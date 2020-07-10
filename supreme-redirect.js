// ==UserScript==
// @name         gloaky-scripts Supreme Redirect
// @namespace    http://www.supremenewyork.com/
// @version      1.0.0
// @description  Supreme redirect
// @author       gloak#1141
// @include      *://*.supremenewyork.com/*
// ==/UserScript==

(function () {
    'use strict';
    // shop redirect
    if (document.location == "https://www.supremenewyork.com/shop") {
        window.location = "https://www.supremenewyork.com/shop/all";
    }
})();