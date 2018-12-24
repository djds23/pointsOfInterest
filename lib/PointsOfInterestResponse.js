class PointsOfInterestResponse {
  constructor(clients) {
    this.clients = clients
  }

  async body() {
    let result = await this.clients.map(async (client) => {
      let items = await client.data()
      return {
        "label": client.label,
        "items": items
      }
    })
    return result
  }
}

module.exports = PointsOfInterestResponse