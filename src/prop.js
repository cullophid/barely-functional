const curry = require('./curry')

module.exports = curry((prop, o) => o[prop])