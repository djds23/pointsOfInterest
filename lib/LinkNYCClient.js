const Item = require("./Item.js")

function dataURI(dataSetID) {
  let resource = "https://data.cityofnewyork.us/resource/"
  let extension = ".json"
  return resource + dataSetID + extension
}

class LinkNYCClient {

  constructor(request) {
    this.dataSetID = "3ktt-gd74"
    this.label = "Link NYC"
    this.request = request
    this.items = []
  }

  get count() {
    return this.items.count
  }

  async data() {
    let result = new Promise((resolve, reject) => {
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
          resolve(this.items)
        } else {
          reject(error)
        }
      })
    })
    return result
  }
}

module.exports = LinkNYCClient;