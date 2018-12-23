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
app.get('/api/v1/points-of-interest', function(req, response) {
  let client = new DataClient.LinkNYCClient(request)
  client.find((client) => {
    response.json(client.items)
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

