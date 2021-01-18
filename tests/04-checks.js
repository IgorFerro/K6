/*
Mock API
https://designer.mocky.io/

https://run.mocky.io/v3/0dc12919-3623-41f2-b556-d68f3caa0a82

Sencond API:
https://run.mocky.io/v3/8e2f98e8-2525-4f9e-bf0d-5fc8744b4b78
"Message": "API Executed Successfully"

*/

import http from 'k6/http'
import {check} from 'k6'

export default function(){
   //let response = http.get('https://run.mocky.io/v3/0dc12919-3623-41f2-b556-d68f3caa0a82')

   let response = http.get('https://run.mocky.io/v3/8e2f98e8-2525-4f9e-bf0d-5fc8744b4b78')

    //Print Logs
    console.log(`response body length ${response.body.length} for VU= ${__VU} ITERA = ${__ITER}`)


   check(response, {
       'is response status is 200 :' : (r) => r.status === 200,
       'body size is 43 bytes :' : (r) => r.body.length == 39,
   })
}