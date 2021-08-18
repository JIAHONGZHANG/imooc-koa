const koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const routers = require('./routes/routes')
const app = new koa();

app.use(cors());
app.use(koaBody());
app.use(helmet());

app.use(routers())

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});