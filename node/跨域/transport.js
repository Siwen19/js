const http = require('http');
const fs = require('fs');
let results = {};
fs.readFile('products.json', function(err, data) {
    if (err) {
        return console.error(err);
    }
    results = data.toString();  
})

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        'Access-Control-Allow-Methods': '*', //允许所有访问
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With',
        'Access-Control-Max-Age': -1,    // preflight 预检请求结果缓存的时间
        'Access-Control-Allow-Credentials': true  // 凭证 cookie,允许前端请求携带cookie
    });
    res.end(results); 
})
.listen(9090, () => {
    console.log(9090);
})