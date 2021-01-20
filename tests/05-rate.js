/*
Checks will not fail the whote tests suite
so we will use Rate along with check
*/

import {Trend} from 'k6/metrics'
import http from 'k6/http'
import {check} from 'k6'
import {Rate} from 'k6/metrics'

//export variable that will use in test
export let errorRate = new Rate('errors')

//Define Trend
var getApiTrend = new Trend("TREND_Get_Api_Duration")
var getApiWaiting = new Trend("TREND_Get_Api_Waiting")
var googleGetApiTrend = new Trend("TREND_Google_Get_Api_Duration")
var googleGetApiWaiting = new Trend("TREND_Google_Get_Api_Waiting")

//define options 
export let options = {
    thresholds:{
        errors:['rate<0.1'] // i.e 10% error
    }
}

export default function(){
   
   let response = http.get('https://run.mocky.io/v3/13ae1113-8d41-48cd-a65f-3fb0f257048b')
   console.log(`response body length ${response.body.length} for VU= ${__VU} ITERA = ${__ITER}`)
   const check1 = check(response, {
       'is response status is 200 :' : (r) => r.status === 200,
     
   })
   errorRate.add(check1); // !i.e not 200, body lenght not matched aso add noto operator

   const check2 = check(response, {
   'body size is 43 bytes :' : (r) => r.body.length == 43,
  })
  errorRate.add(!check2); // !i.e not 200, body lenght not matched aso add noto operator
  
  // Added response duration inside custom trend
  getApiTrend.add(response.timings.duration)
  getApiWaiting.add(response.timings.waiting)
  

  // Add one more API
  const googleResponse = http.get('https://www.google.com/')
  //Add Trend
  googleGetApiTrend.add(googleResponse.timings.duration)
  googleGetApiWaiting.add(googleResponse.timings.waiting)

  }