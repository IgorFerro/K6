/*
Mock API
https://designer.mocky.io/

https://run.mocky.io/v3/0dc12919-3623-41f2-b556-d68f3caa0a82

*/

import http from 'k6/http'
import {check} from 'k6'

export default function(){
   let response = http.get('https://run.mocky.io/v3/0dc12919-3623-41f2-b556-d68f3caa0a82')
   check(response, {
       'is response status is 200 :' : (r) => r.status === 200,
   })
}