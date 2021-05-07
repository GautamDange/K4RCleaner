const express = require('express');
var request = require('request');
var app = express();
const bodyParser = require('body-parser');
//Options of body-parser-xml module


var headers = 
{
  'Content-Type': 'application/json'
};

//var dataString = '{ "products": [{ "depth": 111, "description": "PRODUCTGTIN00001", "gtin": "GTINN1", "height": 222, "id": "100", "length": 333, "name": "PRODUCTGTIN00001", "weight": 20},{ "depth": 111, "description": "PRODUCTGTIN00001", "gtin": "GTINN2", "height": 222, "id": "101", "length": 333, "name": "PRODUCTGTIN00001", "weight": 20}]}';

var options = 
{
  url: 'http://localhost:8090/k4r-core/api/v0/products',
  method: 'GET',
  headers: headers,
};

function callback(error, response, body) 
{
  if (!error && response.statusCode == 200) 
  {
    const jsondata = JSON.parse(body);
    for (let item of jsondata) 
    {
      console.log(item.id);

      var options = 
      {
        url: 'http://localhost:8090/k4r-core/api/v0/products/'+item.id,
        method: 'DELETE',
      };

      function callback(error, response, body) 
      {
        if (!error && response.statusCode == 200) 
        {

        }
      }
    request(options, callback);
    }
    //console.log(body);
  }
}
request(options, callback);
