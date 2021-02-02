import {check} from 'k6'
import {Rate} from 'k6/metrics'
import http from 'k6/http'
import {Trend} from 'k6/metrics'

//Check Failure Rate or Error Rate
let failureRate =  new Rate("failure_rate")

//Define Trends
var createApiTrend = new Trend("Trend_CreateApi")
var getApiTrend = new Trend("Trend_GetApi")
var deleteApiTrend = new Trend("Trend_DeleteApi")

//Define type header function
export const setHeader = () => {
    return {
        headers :{
            "Content-Type" : "application/x-www-form-urlencoded"
        }
    }
}

export const route_createApi = (enpoint , token) => `${enpoint}?test${token}`

export function createApi(endpoint, token) {
    console.log(`Inside createApi token=${token}`)
    let postResponse = http.post(`${route_createApi(endpoint,token)}`,null,setHeader())
    //Add Trend
    createApiTrend.add(postResponse.timings.duration)
    //Check for 200
    checkPostResponse = check(postResponse, {
        "Create Api status 200" : r => r.status ===20
    })
    //Error Rate
    failureRate.add(!checkPostResponse)
    //Read the response
    let responseBody = JSON.parse(postResponse.body)

    try {
        var id = responseBody[0].id;
        console.log(`course id is ${id}`)
    } catch (ex) {
        checkPostResponse = check(postResponse,{
            "Create Api does not return valid data ": r.status === 999
        })
        failureRate.add(!checkPostResponse)
    }


}
