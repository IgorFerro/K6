/*
Parse Complex Array
*/

import http from 'k6/http'

export default function(){
    let response = http.get('https://run.mocky.io/v3/82e5d950-66ae-4197-9c81-c463123fbf42')

    //Print values - parse Json response body
    let body =JSON.parse(response.body)
    
    body.data.forEach(element => {
        console.log(`name is ${element.name}`)

        //Print array inside the element
        element.array.forEach(elementArray => {
            console.log(`value of property array is ${elementArray}`)
        })
    });

}
