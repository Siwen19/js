const fs = require('fs')
const Koa = require('koa'); // web node 开发框架
const KoaStatic = require('koa-static'); // web node 开发框架  
const app = new Koa();

const main = ctx => {
  ctx.response.type = 'html'; // 响应头
  // 在服务器端打开可读流
  ctx.response.body = fs.createReadStream('./template.html')
}
app.use(KoaStatic('./'));
app.use(main);
app.listen(8888);
