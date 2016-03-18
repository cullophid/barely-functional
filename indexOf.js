const curry = require('./curry')
const Nothing = require('./Maybe').Nothing
const Just = require('./Maybe').Just

module.exports = curry((x, xs) => {
    const index = xs.indexOf(x)
    return index === -1 ? Nothing() : Just(index)
})
