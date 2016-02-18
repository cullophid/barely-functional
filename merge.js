const curry = require('./curry')

module.exports = curry((o, o1) => Object.assign({}, o, o1))