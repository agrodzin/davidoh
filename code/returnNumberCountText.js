var config = require('config');
var http = require('http')
var console = require('console')
var secret = require('secret');

module.exports.function = function returnNumberCount (numCount, object, place) {
  var i = 0

  var URL = config.get("uri")
  var secretValue = secret.get('code');
  var data = {
    "action": "countCapsules",
    "secret": secret
  }
var options = {
    passAsJson: true,
    returnHeaders: true,
    format: 'json'
  };
  numCount = ""
  var tmpResults = http.postUrl(URL,data, options)
  tmpResults = JSON.parse(tmpResults.responseText)
  magicNumber = tmpResults.capsuleCount
  while (i < magicNumber){
    if (i + 1000 < magicNumber){
      numCount = numCount.concat("...")
      numCount = numCount.concat((i + 1000).toString())
      i = i + 1000
    }
    else if (i + 100 < magicNumber){
      numCount = numCount.concat("...")
      numCount = numCount.concat((i + 100).toString())
      i = i + 100
    }
    else if (i + 10 < magicNumber){
      numCount = numCount.concat("...")
      numCount = numCount.concat((i + 10).toString())
      i = i + 10
    }
    else{
      numCount = numCount.concat(" ...")
      numCount = numCount.concat((i + 1).toString())
      i = i + 1
    }
  }
   var numAndPlace = {
    "magicNumber": magicNumber,
    "object": object,
    "place": place,
    "numCount": numCount
  }

  return numAndPlace
}
