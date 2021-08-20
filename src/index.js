import koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import routers from './routes/routes';
import compose from 'koa-compose';

const app = new koa();

const middlewares = compose([koaBody(), cors(), helmet()]);

app.use(middlewares);

app.use(routers());

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
