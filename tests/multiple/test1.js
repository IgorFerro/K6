import http from 'k6/http'


export let options = {
    //Declare configuration
    vus:20,
    duration:'1s'
}


export default function () {
    http.get('https://www.google.com/')
}