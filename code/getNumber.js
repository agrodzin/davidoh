var config = require('config');
var http = require('http')
var console = require('console')
var secret = require('secret');
module.exports.function = function getNumber (object, place, numCount) {
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
  var tmpResults = http.postUrl(URL,data, options)
  tmpResults = JSON.parse(tmpResults.responseText)
  var numAndPlace = {
    "magicNumber": tmpResults.capsuleCount,
    "object": object,
    "place": place,
    "numCount": numCount
  }

  return numAndPlace
}
