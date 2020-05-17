const http = require('http');
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
        res.end('首页');
    } else if (req.url === 'about') {
        res.end('About');
    }
})
.listen(1314);