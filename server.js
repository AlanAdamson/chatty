var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var messages = [
  // "I can't do that Dave."
];

app.get('/', function(req, res){
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.post('/', function(req, res){
  messages.push({
    message: req.body.message,
    time: new Date()
  });
  res.status(200).set(header).send(JSON.stringify(messages));
});


app.options('/', function(req, res, next){
  res.status(200).set(header).send();
});


var header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  };


app.listen(8989, function(){
  console.log('I can here you ;-)');
});
