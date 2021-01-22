/*
Influxdb is time series databaes
K6 stores performace results in this database

1-Download Influx
https://dl.influxdata.com/influxdb/releases/influxdb_1.8.3_amd64.deb
2-Extract Files
3-Execute: influxd file



//Influx command
k6 run .\tests\15-fixed-rps.js --out influxdb=http://127.0.0.1:8086/myk6dtabase --vus 5 --duration 5s --rps 5


//Setup Grafana Dashboard
1-Extract Files
2-Acess bin directory
3-Execute grafana-server
4-Grafana Stated on port 3000
5- User: admin, password: admin
6-Select create new dashboar an choose InfluxDB
7- Fill url http with http://localhost:8086
8- Fill in InfluxDB Details Database name: myk6dtabase and save.
9- On Plus button select import and fill the name field with: https://grafana.com/grafana/dashboards/2587
10-Select your instance on k6 field then click on import button


*/