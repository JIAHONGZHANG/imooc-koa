import combineRouters from 'koa-combine-routers'

import aRouters from './aRouter'
import bRouters from './bRouter'

export default combineRouters(aRouters, bRouters)