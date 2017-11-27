const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
let router = new Router();

const path = require('path');
const serve = require('koa-static');

app.use(serve(path.join(__dirname, 'public')));

app.use(require('koa-views')(path.join(__dirname, './views'), {
  extension: 'pug'
}));

router.get("/", async (ctx) => {
  await ctx.render('index.pug');
});

app.use(router.routes());

app.listen(3001, () => {
  console.log('server starting on ' + 3001);
});