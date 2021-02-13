
import http from 'k6/http'

export let options = {
    scenarios : {
        example_scenario: {
            executor:'constant-vus',
            exec:'scenario_test_const_vu',
            vus: 10,
            duration: '10s',
            env: {MYVAR : 'myconstvu'}

        },

        ramp_up_scenario : {
            executor: 'ramping-vus',
            exec:'scenario_test_ramp_up',
            startVUs: 0,
            stages:[
                {duration: '5s', target: 5},
                {duration: '3s', target: 10},

            ],
            env: {MYVAR : 'ramp_upscenario'},
            gracefulRampDown: '0s'
                }
      }

    }

    export function scenario_test_const_vu () {
        console.log(`ENV is ${__ENV.MYVAR}`)
        http.get('https://www.google.com/')
    }

    export function scenario_test_ramp_up () {
        console.log(`ENV is ${__ENV.MYVAR}`)
        http.get('https://www.google.com/')
    }