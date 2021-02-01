import * as apiService from '../utility/apiService.js'
import * as env from '../../env.js'
import * as testData from '../../testdata/testData.js'

export let options = {
    vus: testData.VUS,
    duration: testData.DURATION,
    teardownTimeout: "20s"
}

//INIT
let environment
let token

//Environment
if(`${__ENV.ENVIRONMENT}` == env.int){
    environment= env.intEnvironment
    token = `${__ENV.INT_TOKEN}`
}
else if(`${__ENV.ENVIRONMENT}` == env.dev){
    environment = env.devEnvironment;
    token = `${__ENV.DEV_TOKEN}`
}