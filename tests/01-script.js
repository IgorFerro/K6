// Write in Javascript
// Call google.com - https://www.google.com/
// Call means get - http.get
// Run K6 - k6 run tests/01-script.js

import http from 'k6/http'

export default function () {
    http.get('https://www.google.com/')
}