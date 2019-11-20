var config = require('config');
var http = require('http')
var console = require('console')
var secret = require('secret');

module.exports.function = function playJobsDone (NumCount, IsQuickCount, Object, Place) {
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
  NumCount = ""
  var tmpResults = http.postUrl(URL,data, options)
  tmpResults = JSON.parse(tmpResults.responseText)
  magicNumber = tmpResults.capsuleCount

  var tmpPlace = (typeof(Place) == "undefined" || Place == null) ? config.get('place') : Place
  var tmpObject = (typeof(Object) == "undefined" || Object == null) ? config.get('item') : Object
 if (IsQuickCount == "Simple"){
   var numAndPlace = {
     "MagicNumber": magicNumber,
     "Object": tmpObject,
     "Place": tmpPlace,
     "NumCount": magicNumber.toString()
   }
   return numAndPlace
 }
  while (i < magicNumber){
    if (i + 1000 < magicNumber){
      NumCount = NumCount.concat("...")
      NumCount = NumCount.concat((i + 1000).toString())
      i = i + 1000
    }
    else if (i + 100 < magicNumber){
      NumCount = NumCount.concat("...")
      NumCount = NumCount.concat((i + 100).toString())
      i = i + 100
    }
    else if (i + 10 < magicNumber){
      NumCount = NumCount.concat("...")
      NumCount = NumCount.concat((i + 10).toString())
      i = i + 10
    }
    else if (i + 5 < magicNumber)
    {
      NumCount = NumCount.concat("...")
      NumCount = NumCount.concat((i + 5).toString())
      i = i + 5
    }
    else{
       NumCount = NumCount.concat(" ...")
        NumCount = NumCount.concat((i + 1).toString())
      i = i + 1
    }
  }
   var numAndPlace = {
    "MagicNumber": magicNumber,
    "Object": tmpObject,
    "Place": tmpPlace,
    "NumCount": NumCount
  }
console.log(tmpObject)
  return numAndPlace
}
