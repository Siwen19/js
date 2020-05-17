const fs = require('fs');

function copy(sourceUrl, destUrl) {
    // fs.readFile(sourceUrl, (err, info) => {
    //     if (!err) {
    //         fs.writeFile(destUrl, info, (err) => {
    //             if ( !err ) {
    //                 console.log('拷贝完毕');
    //             }
    //         })
    //     }
    // });
    // 源头 可读流，可写流，双工流与转换流
    const readStream = fs.createReadStream(sourceUrl);
    const writeStream = fs.createWriteStream(destUrl);
    readStream.pipe(writeStream);
}
// 不用流 -> 读完一个文件得到内容 info放到我们计算内存里面的 -> 把它写到某个地方
// 前端 -> 天然就是分布式
copy('./README.md', './copy.md');