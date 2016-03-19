const curry = require('./curry')
const Nothing = require('./Maybe').Nothing
const Just = require('./Maybe').Just

module.exports = curry((def, m) => m.isNothing ? def : m.value)