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
    this.url = url
  }
}

class LinkNYCClient {

  constructor(request) {
    this.dataSetID = "3ktt-gd74"
    this.request = request
  }
  
  find(callback) {
    this.request(dataURI(this.dataSetID), (error, response, body) => {
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
      } else {
        this.items = []
        console.warn(error);
      }
      callback(this)
    });
  }
  
}

exports.LinkNYCClient = LinkNYCClient;