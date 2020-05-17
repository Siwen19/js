// 轻量级web开发框架
const koa = require('koa');
const fs = require('fs');
const app = new koa();
// const func = ctx => {
//     console.log('func')
//     ctx.response.body = 'func'
// }
// 启动一个服务 函数可以封装一个服务
const main = ctx => {
  // console.log(ctx)
  console.log(ctx.request);
  ctx.response.type = 'html'; // 响应头
  const html = fs.readFileSync('./template.html', 'utf8');
//   fs.readFile('./template.html', 'utf8', function(err, data) { // 异步
      console.log(html);
      ctx.response.body = html;  // 发送出去
//   });
//   console.log(html); 
}
app.use(main); // 启动了一个服务 给访问者用 
app.listen(3000)
