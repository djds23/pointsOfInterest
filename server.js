// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const request = require('request');
const PublicArtClient = require('./lib/PublicArtClient');
const publicArtRequest = require('./lib/PublicArtRequest')
const LinkNYCClient = require('./lib/LinkNYCClient');
const PointsOfInterestResponse = require('./lib/PointsOfInterestResponse');

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/api/v1/points-of-interest', async function(req, response) {
  let linkNYCClient = new LinkNYCClient(request)
  let publicArtClient = new PublicArtClient(publicArtRequest)
  let poi = new PointsOfInterestResponse([
    linkNYCClient,
    publicArtClient
  ])
  response.json(poi.body())
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

