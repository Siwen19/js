const http = require('http');

class MyKoa {
    constructor() {
        // 手写代码 源码分析
        console.log('写Koa');
        this.fn = undefined;
    }
    listen(...args) {
        console.log(...args); 
        // let server = http.createServer((req, res) => {
        //     res.end('Hello Candy');
        // });
        let server = http.createServer(this.fn); // 异步的回调函数
        server.listen(...args);
    }
    use(fn) { 
        this.fn = fn;
    }
}

module.exports = MyKoa;