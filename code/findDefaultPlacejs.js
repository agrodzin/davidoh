var config = require('config');

module.exports.function = function findDefaultPlacejs () {
    var configValue = config.get('place');
    return configValue
}
