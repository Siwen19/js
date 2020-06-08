const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    if (req.url.includes('/api')) {
        let myurl = url.parse(req.url);
        console.log(myurl);
        let params = new URLSearchParams(myurl.query);
        let posts = ['js', 'php']; 
        // console.log(req);
        let methodName = params.get('callback');
        // res.end(JSON.stringify(posts));  
        res.end(`${methodName}(${JSON.stringify(posts)})`) 
    }
})
.listen(9090, () => {
    console.log(9090);
})