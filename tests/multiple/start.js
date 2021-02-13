import http from 'k6/http'
import test2 from './test2.js'
import test1 from './test2.js'


export let options = {
    //Declare configuration
    vus:20,
    duration:'1s'
}


export default function () {
    test1()
    test2()
}