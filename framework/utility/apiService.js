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

