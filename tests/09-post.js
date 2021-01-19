/*
Post Something

*/

import http from 'k6/http'

export default function () {
    var url = http.get('https://run.mocky.io/v3/983af971-096a-4108-b262-d13ce7f46f47')

    var param = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //Define body request
    var payload = JSON.stringify({
        email: "lkmnshs@gmail.com",
        password: "vcvfd"
    })

    let response = http.post(url, param, payload)



    //Print values - parse Json response body
   // let body = JSON.parse(response.body)


}