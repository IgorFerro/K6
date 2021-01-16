// Write in Javascript
// Call google.com - https://www.google.com/
// Call means get - http.get
// Run K6 - k6 run tests/01-script.js
// 10 virtual users- k6 run --vus 10 --duration 5s tests/01-script.js

import http from 'k6/http'

export let options = {
    //Declare configuration
    vus:10,
    duration:'1s'
}

export default function () {
    http.get('https://www.google.com/')
}