## req
浏览器: xhr fetch
node: http.get()

不同的api -> http -> 一样

http: 超文本传输协议
- 调用xhr
```js
const xhr = new Xmlhttprequest();
xhr.setHeader('Content-Type': 'application/json');
xhr.open('POST', 'api.com', true);
xhr.send({a: 1, b: 2})
```
- 浏览器拼接报文
    http1.1 报文(纯文本):
    - 首行 \r\n
    - 首部 \r\n
    - \r\n
    - 实体 \r\n

## 解析报文
split('\r\n');
限制： 必须等到拿到一个完整的报文
现实：报文传输，可以允许我们分段传输

## 解析
FSM（finate, state, machine)
Infinity: 正无穷，负无穷

浏览器解析报文：body(html), headers, 响应行 

## 编译原理
- 词法分析（分词）：代码切割成一个个最小的单位
- 语法分析 
- 生成目标代码
