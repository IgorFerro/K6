import http from 'k6/http'

//Ramp up anda down users
export let options = {
    stages: [
        { duration: '1s', target: 30}, // 30 users for 1 seconds

        { duration: '1s', target: 40}  // 40 users for 1 seconds
    ] //, vus:10, duration: "1m3s"
}


export default function(){
  http.get('https://www.google.com')
}