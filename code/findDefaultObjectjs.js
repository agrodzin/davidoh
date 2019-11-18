var config = require('config');

module.exports.function = function findDefaultObjectjs () {
  var configValue = config.get('item');
  return configValue
}
