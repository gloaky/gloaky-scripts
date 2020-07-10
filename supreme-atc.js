// ==UserScript==
// @name         gloaky-scripts Supreme ATC
// @namespace    http://www.supremenewyork.com/
// @version      1.0.0
// @description  Supreme add to cart
// @author       gloak#1141
// @include      *://*.supremenewyork.com/shop/*/*
// ==/UserScript==

var wantSize = "10.5"; // size preferred before random size is chosen

(function () {
    'use strict';

    var i;

    for (i = 0; i < document.getElementById('s').length; i++) {
        var size = document.getElementById('s').options[i].text;
        var sizesAvailabe = []

        sizesAvailabe.push(i)

        if (size == wantSize) {
            document.getElementById("s").selectedIndex = i;
            break;
        } else {
            var randomSize = Math.floor(Math.random() * (sizesAvailabe.length - 0)) + 0
            document.getElementById("s").selectedIndex = randomSize
            document.getElementsByName("commit")[0].click()
        }
    }
    document.getElementsByName("commit")[0].click();
    window.setTimeout(function () {
        window.location = "https://www.supremenewyork.com/checkout";
    }, 300);
})();