// alt const {john, peter} = require(...)
const names = require('./4Names.js')
const sayHi = require('./5Utils.js')

sayHi('suz')
sayHi(names.john)
sayHi(names.peter)