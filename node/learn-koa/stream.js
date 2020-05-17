const fs = require('fs');
const Koa = require('koa'); // web node  
const app = new Koa();

const main = ctx => {   
    if (ctx.request.url === '/zly.jpg') {
        ctx.response.type = 'image';
        ctx.response.body = fs.createReadStream('./zly.jpg');
    } else if (ctx.request.url === '/common.css') {
        ctx.response.type = 'css';
        ctx.response.body = fs.createReadStream('./common.css');
    } else {
        ctx.response.type = 'html'; // 响应头
        // 在服务器端打开可读流
        ctx.response.body = fs.createReadStream('./template.html');
    } 
}
// const main = ctx => { 
//     if (ctx.request.path !== '/') {
//         ctx.response.type = 'html';
//         ctx.response.body = '<a href="/">Index Page</a>';
//     } else {
//         ctx.response.body = 'Hello China!';
//     }
// }  
app.use(main);
app.listen(8080);