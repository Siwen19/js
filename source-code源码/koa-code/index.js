const koa = require('./lib/application');
const app = new koa();

// app.use((ctx) => {
//     ctx.body = 'Hello China';
// })

app.use((req, res) => {
    res.end('Hello Again');
});

app.listen(3000, () => {    //api koa
    console.log('你的应用在3000端口启用');
});