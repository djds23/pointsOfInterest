
function dataURI(dataSetID) {
  let resource = "https://data.cityofnewyork.us/resource/"
  let extension = ".json"
  return resource + dataSetID + extension
}

exports.dataURI = dataURI;