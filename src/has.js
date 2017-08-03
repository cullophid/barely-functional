const curry = require('./curry')

module.exports = curry((prop, o) => Object.prototype.hasOwnProperty.call(o, prop))