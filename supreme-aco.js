// ==UserScript==
// @name         gloaky-scripts Supreme ACO
// @namespace    http://www.supremenewyork.com/
// @version      1.0.0
// @description  Supreme checkout and process payment
// @author       gloak#1141
// @include      *://*.supremenewyork.com/checkout
// ==/UserScript==

var billing = {
    name: "gloaky Supreme",
    email: "test@gmail.com",
    tel: "123456789",
    address: "190 Bowery St",
    address2: "",
    zip: "10012",
    city: "New York",
    state: "NY",
    country: "USA"
};
var credit_card = {
    number: "12345678901",
    cvv: "123",
    month: "07",
    year: "2021"
};

var auto_process = true; // set this to true if you want the checkout to automatically click the process payment button

(function () {
    'use strict';

    // checkout automation
    if (document.location == "https://www.supremenewyork.com/checkout") {

        // billing/billing information
        document.getElementsByName("order[billing_name]")[0].value = billing.name;
        document.getElementsByName("order[email]")[0].value = billing.email;
        document.getElementsByName("order[tel]")[0].value = billing.tel;
        document.getElementsByName("order[billing_address]")[0].value = billing.address;
        document.getElementsByName("order[billing_address_2]")[0].value = billing.address2;
        document.getElementsByName("order[billing_zip]")[0].value = billing.zip;
        document.getElementsByName("order[billing_city]")[0].value = billing.city;
        document.getElementsByName("order[billing_state]")[0].value = billing.state;
        document.getElementsByName("order[billing_country]")[0].value = billing.country;

        // credit card information
        document.getElementsByName("riearmxa")[0].value = credit_card.number;
        document.getElementsByName("credit_card[meknk]")[0].value = credit_card.cvv;
        document.getElementsByName("credit_card[month]")[0].value = credit_card.month;
        document.getElementsByName("credit_card[year]")[0].value = credit_card.year;

        // accept terms
        $('div.icheckbox_minimal').iCheck('check');

        // complete
        if (auto_process) {
            setTimeout(function () {
                document.getElementById("checkout_form").submit();
            }, 3000);
        }
    }
})();