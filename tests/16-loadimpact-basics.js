/*
Basics loadimpact script
 1- Create Script
 2- Login into your k6 cloud account by cmd
 3- Define ext options
 4- Run Script: k6 run .\tests\16-loadimpact-basics.js -o cloud 

 //Groups
 Allows you to group load test k6 scripts for better visualization

 //Threashold on groups
 Defines pass/fail criteria for group

 //Tags
 Usefull to filter checks,Api calls, thresholds

 //Treshoulds on Tags - pass/fail complete load test based upon Tags

*/

import http from 'k6/http';
import {check,group} from 'k6'
import {Rate,Trend} from 'k6/metrics'

//Declare trend
let groupDuration = Trend("groupDuration")
let getUserApiTrend = Trend("getUserApiTrend")
let getGroupTrend = Trend("getGroupApiTrend")

//Declare Variables
export let errorRate = new Rate('errors')

//Define Options
export let options = {
    vus: 10,
    duration: '2s',
    thresholds: {
        errors:['rate<0.1'], //10% errors

        'groupDuration{groupName:groupGetUsers}':['avg < 200'],
        'groupDuration{groupName:groupGetGroups}':['avg< 300'],

        //Add Tags - Theshoulds
        'http_req_duration{type:GETAPITAG}' : ['p(95)<100'], // duration must be less than 100 miliseconds 95% of time
        'http_req_duration{type:GETGROUPSTAG}' : ['p(95)<100']
    },

    ext: {
        loadimpact: {
          projectID: 3523104,
          // Test runs with the same name groups test runs together
          name: "Trainning"
        }
      }
    }

    // Function to measure Time
    function groupWithMetrics(nameOfGroup, groupFunction ) {
        //Start time
        let start = new Date()
        // Call Group
        group(nameOfGroup, groupFunction);
        //Stop Time
        let end = new Date();
        //Add Trend Timming
        groupDuration.add(end-start, {groupName: nameOfGroup})
       


    }

    //Default main function -API 1
    export default function () {

        groupWithMetrics("groupGetUsers", function  (){ 
        const responseGetUsers = http.get('https://run.mocky.io/v3/d3cfd6eb-5088-43eb-b27a-0e690d870402', {
            tags:{'type' : 'GETAPITAG'}
        });
        const checkGetUsers = check(responseGetUsers, {
            "is response os API1 is 200 : " : r => r.status ===200,
            //ADD Tag
            tags: {
                type: "GETAPITAG"
            }
        })
        //Define error rate
        errorRate.add(!checkGetUsers)

        //Add Trend 
        getUserApiTrend.add(responseGetUsers.timings.duration,{type: "GETAPITAG"})
        })

        //API- 2
        groupWithMetrics("groupGetGroups", function(){
            const responseGetGroups = http.get('https://run.mocky.io/v3/bb4ac454-8307-46e2-9281-598c9c754121', {
                tags: {'type': 'GETGROUPSTAG'}
            });
            const checkGetGroups= check(responseGetGroups, {
                "is response of Get Groups is 200 : " : r => r.status ===200,
                tags: {
                    type: "GETGROUPSTAG" // type is customized name, iy can be anything
                }
            })
        //Define error rate
        errorRate.add(!checkGetGroups)
        //Add Trend
        getGroupTrend.add(responseGetGroups.timings.duration,{type:"GETGROUPSTAG"})
       
       })
    }

