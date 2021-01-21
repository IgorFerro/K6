/*

Test Life Cycle K6

k6 run .\tests\14-test-life-cycle.js --vus 10 --duration 5s

/*/

// 1 - Init - Define options (VU, duration, Threasholds)
 var counter = 1

// 2 - Setup - Called once before load starts
 export function setup(){
     console.log(`Inside Setup -  ${counter}`)
     return "My Name is ABCD"
 }

// 3 - Default - It's the main function. Entry pont for virtual users
 export default function(data){
     console.log(`Inside SetUp - ${counter} VU=${__VU} ITER=${__ITER} DATA is ${data}`)
     counter = counter + 1

 }

// 4- Teardown - gets called after default function. Just one time
export function teardown (data){
    console.log(`Inside SetUp - ${counter} DATA is ${data}`)

}



