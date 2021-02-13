//Define Scenarios Indide Options
export let options = {
    scenarios : {
        example_scenario: {
            executor:'shared-iterations',
            startTime: '10s',
            gracefulStop: '5s',
            env: {ENVIRONMENT : 'int'},
            tags: {example_tag: 'testApi'},

            vus: 10,
            iterations: 40,
            maxDuration: '10s'

        },

        another_scenario : {

        }
    }
}