import http from 'k6/http'

export default function(){
    let response = http.get('https://run.mocky.io/v3/b2ef378b-5f93-421e-8406-aba4f319578f')

    //Read response array

    let body =JSON.parse(response.body)
    body.forEach(element => {
        console.log(`name is ${element.name}`)
    });

}