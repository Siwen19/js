const http = require('http');
const fs = require('fs');
http.createServer((req, res) => { 
    const writeStream = fs.createWriteStream('./params.txt');
    req.pipe(writeStream);
    res.end('ok');
})
.listen(8088, () => {
    console.log('8088');
})