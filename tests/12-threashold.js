/*
Threashold define pass/fail criteria for tests

EXAMPLE
System does not produce more than 1% errors
Response time for 95% of APIs/requests should be below 200 miliseconds
Response time for 99% of APIs/requests should be below 400 miliseconds

 k6 run .\tests\12-threashold.js --VUS 10 --duration 10s
*/

import http from 'k6/http'
import {Rate} from 'k6/metrics'

//Declare Rate
const failRate = new Rate('failed request')

export let options = {
    threasholds:{
        // Define Requirements
        'faile requests' : ['rate<0.1'],
        'http_req_duration' : ['p(95)<001', 'p(99)<001']
    }
}

export default function(){

    let res = http.get('https://google.com/')

    // Apply Threasholds
    failRate.add(res.status !== 200)// if response is not 200, then fail

    

}

