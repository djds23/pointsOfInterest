// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const request = require('request');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/api/v1/points-of-interest', function(request, response) {
  let resource = "https://data.cityofnewyork.us/resource/"
  let extension = ".json"
  let linkNYC = "3ktt-gd74"
  request.get(resource + linkNYC + resource, (error, response, body) => {
    response.json(body);
  })
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
