const Item = require("./Item.js")

function itemNameFrom(element) {
  return `${element["name"]}, by ${element["artist"]}`
}

function duration(element) {
  return `Available from ${element["from_date"]} to ${element["to_date"]}`
}

class PublicArtClient {
  constructor(dataProvider) {
    this.dataProvider = dataProvider
    this.label = "Public Art"
    this.items = []
  }

  async data() {
    let data = await this.dataProvider()
    let obj = JSON.parse(data)
    this.items = obj.map((element) => {
      return new Item(
        itemNameFrom(element),
        duration(element),
        element["lat"],
        element["lng"],
        null
      )
    })
    return this.items
  }
}

module.exports = PublicArtClient