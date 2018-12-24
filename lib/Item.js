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

module.exports = Item