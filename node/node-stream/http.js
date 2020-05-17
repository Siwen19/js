const https = require('https');
const fs = require('fs');
https.get('https://movie.douban.com/top250', function(res) {
    // console.log(res); // 继承了流可读流 提供数据的那一方
    const writeStream = fs.createWriteStream('./douban.html');
    res.pipe(writeStream);
});
https.get('https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', function(res) {
    const writeStream = fs.createWriteStream('./avatar.jpg');
    res.pipe(writeStream);
}); 