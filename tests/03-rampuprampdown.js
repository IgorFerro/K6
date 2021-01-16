import http from 'k6/http'

//Ramp up anda down users
export let options = {
    stages: [
        { duration: '1s', target: 20}, // 20 users for 1 seconds

        { duration: '1s', target: 40}  // 40 users for 1 seconds
    ]
}


export default function(){
  http.get('https://www.google.com')
}