/*

Rate Per Secod
-- rps
k6 run .\tests\15-fixed-rps.js --vus 5 --duration 5s
k6 run .\tests\15-fixed-rps.js --vus 5 --duration 5s --rps 5
*/

import http from 'k6/http'

export default function(){
    http.get('https://google.com/')
}