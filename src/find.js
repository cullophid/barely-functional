const Nothing = require('./Maybe').Nothing
const Just = require('./Maybe').Just
const curry = require('./curry')

module.exports = curry((pred, xs) => {
    const found = xs.find(pred)
    return found == null ? Nothing() : Just(found)
})
