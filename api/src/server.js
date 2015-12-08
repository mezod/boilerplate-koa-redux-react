const koa = require('koa');
const app = koa();

app.use(function *() {
  this.body = 'Hello from koajs';
});

app.listen(3000);