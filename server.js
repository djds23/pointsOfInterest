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
app.get('/api/v1/points-of-interest', function(req, resp) {
  let URI = DataClient.dataURI("3ktt-gd74")
  console.log(URI)
  request.get('http://www.google.com', function (error, dataResponse, body) {
    if (!error && dataResponse.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      resp.json(body)
    } else {
      console.warn(error);
    }
});

// suppress the direct output of the call. you can expand the result below

});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

