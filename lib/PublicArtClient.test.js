const describe = require("affirmer").describe;
const it = require("affirmer").it;
const PublicArtClient = require('./PublicArtClient.js');

let mockSingleElementBody = `[
  {
    "name": "What We Carry",
    "artist": "Yvonne Shortt, Joel Esquite & Mayuko Fujino, with the Jackson Heights Community",
    "from_date": "2019-10-25",
    "to_date": "2019-06-30",
    "location": null,
    "description": "<em>What We Carry</em> celebrates immigrants through a two-part installation. The first element, an aluminum sculpture of a silhouetted woman, is adorned with cut-out designs illustrating the journey of those who come by plane, water, and land. She holds a bowl that symbolizes what binds all of us: our family and our community. A series of flower sculptures representing the love and beauty that spring forth from us into our community comprises the second part of the installation. The flowers were co-created by the community members at the collaborative workshops, then fabricated in wood and hung around the iron fence, which traditionally sets boundaries but here communicates a sense of togetherness and collaboration.<p>This project is part of <a href=\\"https://www.queenscouncilarts.org/\\">Queens Council on the Arts'</a> public art program titled, <a href=\\"https://www.queenscouncilarts.org/artsite/\\">ArtSite</a>, supported by the Queens Council on the Arts with funds from <a href=\\"https://regionalcouncils.ny.gov/\\">NYS Regional Economic Development Council</a> in partnership with the <a href=\\"https://www.arts.ny.gov/\\">New York State Council on the Arts</a>, with additional support from the <a href=\\"https://www1.nyc.gov/site/dcla/index.page\\">New York City Department of Cultural Affairs</a>.</p>",
    "borough": "Q",
    "show_large_image": "1",
    "lat": "40.746324",
    "lng": "-73.883612",
    "active": "1"
  }
]`

describe("PublicArtClient", () => {
  describe("#data", () => {
    it("calls the callback when ready", async () => {
      let mockData = () => mockSingleElementBody
      let subject = new PublicArtClient(mockData)
      let items = await subject.data().catch(() => {
        console.assert(false, "error while fetching items")
      })
      console.assert(items.length == 1, "length did not match")
      let item = items[0]
      console.assert(item.title == "What We Carry, by Yvonne Shortt, Joel Esquite & Mayuko Fujino, with the Jackson Heights Community", "title not the same")
      console.assert(item.label == "Available from 2019-10-25 to 2019-06-30", "labeled not the same")
      console.assert(item.url == null, "url present")
    })

    it("throws an error if status is not successful", async () => {
      let errorMessage = "too many requests"
      let mockData = () => {
        throw new Error(errorMessage)
      }
      let error = null
      let subject = new PublicArtClient(mockData)
      try {
        await subject.data()
      } catch (e) {
        error = e
      }
      console.assert(error.message == errorMessage)
    })
  })
})