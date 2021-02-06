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

//Logging
export function logger(endPoint, token, response){
    console.log(`Logger Started VU=${__VU} ITER=${__ITER}`)
    console.log(`Endpoint is=${endPoint} Token is =${token} VU=${__VU} ITER=${__ITER}`)
    console.log(`Response Status is=${response.status} VU=${__VU} ITER=${__ITER}`)
    console.log(`Body is ${JSON.stringify(JSON.parse(response.body))}`)


}

//Define type header function
export const setHeader = () => {
    return {
        headers :{
            "Content-Type" : "application/x-www-form-urlencoded"
        }
    }
}
//http://api.wordnik.com/v4/word.json/{word}
export const route_createApi = (enpoint , token) => `${enpoint}?test${token}`
export const route_getAPi = (endpoint,word)=> `${endpoint}`
export const route_deleteApi = (endpoint,token,word)=> `${endpoint},${token},${word}`

try {
    // Ad correlation Id
    console.log(`Correlation id is ${JSON.stringify(JSON.parse(response.headers))['X-Correlation-id']}`)
    
} catch (ex) {
    
}


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
    //Add Logs
    logger(endpoint,token,postResponse)
    //Read the response
    let responseBody = JSON.parse(postResponse.body)

    try {
        var id = responseBody[0].id;
        console.log(`course id is ${id}`)
        if (`${responseBody[0].id =='undefined'}`) {
            checkPostResponse = check(postResponse, {
                "Create returns Undefined Id" : r=> r.status === 999
            })
            failureRate.add(!checkPostResponse)
        }
    } catch (ex) {
        checkPostResponse = check(postResponse,{
            "Create Api does not return valid data ": r.status === 999
        })
        failureRate.add(!checkPostResponse)
    }

    //Get Api
    export function getApi(enpoint,word){
        const getResponse = http.get(`${route_getAPi(endpoint)}`, null)
        //Add check
        checkGetResponse = check(getResponse, {
            "Get Course status is 200 " : r=> r.status ===200
        })
        //Add error Rate
        failureRate.add(!checkGetResponse)
        //Add Trend
        getApiTrend.add(getApiTrend.timings.duration)
        //Read the body
        let getResponseBody = JSON.parse(getResponseBody)
        //Log Id
        // Add a check case not found
        try {
             
            //If id is undefined, we ne too log
            if (`${getResponseBody[0].id =='undefined'}`) {
                checkGetResponse = check(getResponse, {
                    "Get returns Undefined Id" : r=> r.status === 999
                }) 
            }
            console.log(` Get body ${JSON.stringify(getResponseBody)}`)  
            console.log(` Id is ${getResponseBody[0].id}`)  
        } catch (ex) {
            checkGetResponse = check(getResponse,{
                "Get Api does not return valid data ": r.status === 999
            })
            failureRate.add(!checkGetResponse)
         }
         // return response body
         return getResponseBody
    }

    //Delete Route
    export function deleteAPi(endpoint, token, word ) {
        console.log(`Inside delete course. course id is ${word}`)
        
        // Define Response
        let deleteResponse = http.del(`${route_deleteApi(endpoint,token,word)}`, null ,setHeader())
        //Define check
        checkDeleteResponse = check(deleteResponse,{
            "Delete Course status 200 : " r => r.status === 2000
        })
        //Define error rate
        failureRate.add(!checkDeleteResponse)
        //Measure trend - http response time
        deleteApiTrend.add(deleteResponse.timings.duration)

    }

}
