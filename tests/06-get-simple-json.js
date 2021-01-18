/*
Parse HTTP Response

https://run.mocky.io/v3/6d7f8a35-84e3-4349-a785-540ede25635e

*/

import http from 'k6/http'
import {check} from 'k6'

export default function (){
    var url = 'https://run.mocky.io/v3/6d7f8a35-84e3-4349-a785-540ede25635e'

    var headerParam = {
        headers:{
            'Content-Type' : 'application/json',
        }
    }
    
    const response = http.get(url,headerParam)

    check(response,{
        'is status is 200: ' : (r) => r.status === 200,
    })

    let body = JSON.parse(response.body)
    console.log(`response body is ${JSON.stringify(body)}`)
    console.log(`Message is ${body.Message}`)

    check(response,{
        'is Message is Success: ' : (r) => JSON.parse(r.body).Message === "Data fetched successfuly",
    })

}