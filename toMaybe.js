const Nothing = require('./Maybe').Nothing
const Just = require('./Maybe').Just

module.exports = x => x == null ? Nothing() : Just(x)