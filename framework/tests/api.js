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

// Test Life Cycle - Setup
export function setUp() {
    
}

// Test Life Cycle - Default function - VU Main function

export default function () {
    try {
        //Call api workflow

        let responseBody = apiService.createApi(`${environment.SERVER_ENPOINT}`,token);
        apiService.route_getAPi(environment.SERVER_ENPOINT, token ,responseBody[0].id)
        apiService.route_deleteApi(environment.SERVER_ENPOINT, token ,responseBody[0].id)
        
    } catch (ex) {
        console.log(`error occurs in execution`)
        
    }
}

// Test Life Cycle - Default function - Clean Up