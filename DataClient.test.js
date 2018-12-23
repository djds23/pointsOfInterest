const describe = require("./affirmer.js").describe;
const it = require("./affirmer.js").it;
const LinkNYCClient = require('./DataClient.js').LinkNYCClient;

let mockSingleElementBody = `[
  {
    ":@computed_region_92fq_4b7q": "6",
    ":@computed_region_efsh_h5xi": "24340",
    ":@computed_region_f5dn_yrer": "41",
    ":@computed_region_sbqj_enih": "61",
    ":@computed_region_yeji_bk3q": "3",
    "boro": "Queens",
    "borough_block_lot_bbl": "4101510001",
    "building_identification_number_bin": "4216196",
    "cb_link_id": "LINK-000805",
    "census_tract_ct": "4044601",
    "community_board": "412",
    "council_district": "27",
    "cross_street_1": "163 STREET",
    "cross_street_2": "164 STREET",
    "ixn_corner": "SE",
    "latitude": "40.70468655",
    "link_installation": "2016-08-27T00:00:00.000",
    "link_installation_status": "Live",
    "link_site_id": "qu-12-138095",
    "link_smoke_tested_and_activated_a": "2018-03-30T00:00:00.000",
    "location": {
      "type": "Point",
      "coordinates": [
        -73.79662039,
        40.70468655
      ]
    },
    "longitude": "-73.79662039",
    "neighborhood_tabulation_area_nta": "Jamaica",
    "postcode": "11433",
    "smallest_ppt": "138095",
    "street_address": "163-08 JAMAICA AVENUE"
  }
]`

describe("LinkNYCClient", () => {
  describe("#find", () => {
    it("calls the callback when ready", () => {
      let mockRequest = (_unused, callback) => {
        callback(null, {statusCode: 200}, mockSingleElementBody)
      }
      let subject = new LinkNYCClient(mockRequest)
      subject.find((client) => {
        console.assert(client.items.length == 1)
        let item = client.items[0]
        console.assert(item.title == "163-08 JAMAICA AVENUE")
        console.assert(item.label == "Live")
        console.assert(item.url == "https://link.nyc/faq.html")
      })
    })
  })
})