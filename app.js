var express = require('express');
var app = express();

var ce = require('aws-cost-explorer');
// load configuration from confif/default.json file
var costsApi = ce();


app.get('/', function (req, res) {
  
  costsApi.getMonthToDateCosts({granularity : 'DAILY'}, function(error, data){
    if (error)
      return res.send(error);
    else
      return res.send(data);
  });

});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
