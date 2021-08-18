const combineRouter = require('koa-combine-routers')

const aRouters = require('./aRouter')
const bRouters = require('./bRouter')

module.exports = combineRouter(aRouters, bRouters)