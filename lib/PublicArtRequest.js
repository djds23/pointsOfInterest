const fs = require("fs")

async function requestPublicArt() {
  return fs.readFileSync("./lib/DPR_PublicArt_001.json")
}

module.exports = requestPublicArt