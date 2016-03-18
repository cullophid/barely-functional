const curry = require('./curry')
const Nothing = require('./Maybe').Nothing
const Just = require('./Maybe').Just

module.exports = curry((pred, xs) => {
    const index = xs.findIndex(pred)
    return index === -1 ? Nothing() : Just(index)
})
