/*
Checks - usefull for assertions - pass/fail

Combine Chechs and Threashols
*/

import http from 'k6/http'
import {check} from 'k6'

export let options = {
    vus: 10,
    duration: '10s',
    threasholds: {
     //Rate of successeful checks must be greater than 95%. >95% check must PASS
     'checks' : ['rate>0.95']
    }
}

export default function(){
    let response = http.get('https://google.com/')
    
    //Assume that above API retruns 500
    check(response,{
        'is status is 500 : ' : r => r.status === 500
    })
}
