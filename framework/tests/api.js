import * as apiService from '../utility/apiService.js'
import * as env from '../../env.js'
import * as testData from '../../testdata/testData.js'

export let options = {
    vus: testData.VUS,
    duration: testData.DURATION,
    teardownTimeout: "20s"
}