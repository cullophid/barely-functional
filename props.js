const curry = require('./curry')

module.exports = curry((props, o) => props.map(p => o[p]))