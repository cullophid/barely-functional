const curry = require('./curry')
const Nothing = require('./Maybe').Nothing
const Just = require('./Maybe').Just

module.exports = curry((i, xs) => i >= xs.length ? Nothing() : Just(xs[i]))