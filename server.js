// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const request = require('request');
const DataClient = require('./DataClient.js');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/api/v1/points-of-interest', function(request, response) {
  let URI = DataClient.dataURI("3ktt-gd74")
  console.log(URI)
  request.get("3ktt-gd74", (error, response, body) => {
    response.json(body);
  })
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

