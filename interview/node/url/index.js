// const url = require('url'); // node url 内置模块 CommonJS

const urlString = "http://baidu.com:8080/test/h?query=js#node";
// console.log(url.parse(urlString));

function getQueryString(urlStr) {
    var obj = new Object();
    if (urlStr.indexOf('?') !== -1) {
        var queryStr = urlString.split('?')[1];
        if (urlStr.indexOf('#') !== -1) {
            queryStr = queryStr.split('#')[0];
        }
        var strs = queryStr.split('&');
        for (var i = 0; i < strs.length; i++) {
            obj[strs[i].split('=')[0]] = strs[i].split('=')[1];
        }
    }
    return obj;
}
console.log(getQueryString(urlString));