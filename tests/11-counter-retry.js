/*
 k6 run .\tests\11-counter-retry.js --vus 2 --iterations 2
*/

import {Counter} from 'k6/metrics'
var retryCounter = new Counter("GetAPI_MAX_RETRY")
import http from 'k6/http'
import {sleep} from 'k6'
//we will use sleep to wait for seconds

export default function(){
    // Retry yhe API call
    
    // Add a retry
    var maxAttempts = 5
    retryCounter.add(1)
    for(var retries = 5; retries > 0; retries --){
        var numberOfAttemps = maxAttempts - retries + 1;
    const response = http.get('https://run.mocky.io/v3/6d7f8a35-84e3-4349-a785-540ede25635e')
    if (response.status !== 404) {
        retryCounter.add(1)
        console.log(`response is not correct. attempt is ${retries} VU=${__VU} ITER=${__ITER} sleeping fo 1 seconds`)
        sleep(1)
     }
     else{
         retries == 0
     }
    }
}