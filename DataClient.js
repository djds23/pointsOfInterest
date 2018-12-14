const request = require('request');

function dataURI(dataSetID) {
  let resource = "https://data.cityofnewyork.us/resource/"
  let extension = ".json"
  return resource + dataSetID + extension
}

class Item {
  constructor(title, label, lat, long, url) {
    this.title = title
    this.label = label
    this.coordinate = {
      latitude: lat,
      longitude: long
    }
    this.url
  }
}

class LinkNYCClient {

  constructor() {
    this.dataSetID = "3ktt-gd74"
  }
  
  find(callback) {
    request(dataURI(this.dataSetID), function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let obj = JSON.parse(body)
        this.items = obj.map((element) => {
          let address = element["street_address"]
          let status = element["link_installation_status"]
          let coord = element["location"]["coordinates"]
          let latitude = coord[1]
          let longitude = coord[0]
          return new Item(
            address, 
            status, 
            latitude, 
            longitude,
            "https://link.nyc/faq.html"
          )
        })
        callback(this)
      } else {
        console.warn(error);
      }
    });
  }
  
}

exports.LinkNYCClient = LinkNYCClient;