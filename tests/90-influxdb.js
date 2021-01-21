/*
Influxdb is time series databaes
K6 stores performace results in this database

1-Download Influx
https://dl.influxdata.com/influxdb/releases/influxdb_1.8.3_amd64.deb
2-Extract Files
3-Execute: influxd file



//Influx command
k6 run .\tests\15-fixed-rps.js --out influxdb=http://127.0.0.1:8086/myk6dtabase --vus 5 --duration 5s --rps 5

*/