// async await
const fs = require('fs');
const promise1 = new Promise((resolve, reject) => {
    fs.readFile('./package.json', (err, info) => {
        resolve(info);
    })
})
const promise2 = (info) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./p.json', info, (err) => {
            if (!err) {
                resolve();
            } else {
                reject();
            }
        });
    })
}
const promise3 = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}
// 写法上同步，执行起来依然是异步
// 回调 -> Promise Promise对回调封装，封装出来了then这种API
promise1.then((info) => {
    // 返回 promise 
    return promise2(info);
})
    .then(() => {
        // 等着前面这个promise 
        return promise3(3000);
    })
    .then(() => {
        console.log('ok');
    })

    async function run() {
        // await 接一个异步任务的Promise，后面的代码就会等待，等Promise resolve才会执行
        // await + aysnc 替代了 .then
        let info = await promise1; // promise1 info === resolve后的东西
        await promise2(info);
        await promise3(2000);
        console.log('ok');
    }
    run();