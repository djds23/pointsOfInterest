function describe(message, body) {
  console.log(message)
  let runTest = () => body()
  return runTest()
}

function it(message, body) {
  let runTest = () => {
    try {
      body() 
      console.log(`✅ ${message}`)
    } catch(e) {
      console.log("🙅‍♀️ Failure! 🙅‍♂️")
      console.log(e)
    }
  }
  return runTest()
}

module.exports.it = it
module.exports.describe = describe