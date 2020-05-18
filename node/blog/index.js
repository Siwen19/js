const express = require('express');
const data = require("./db.json");
// koa 是 express 的孩子
const app = express();
// 设计一个url，访问第一首诗 /posts/:id :d(params)
app.get('/posts/:id', function(req, res) {
    console.log(req.params.id);
    let id = req.params.id;
    let post = data.posts.filter(post => post.id == id);
    // res.json(post);
    res.json(post[0].content);
    // res.end(JSON.stringfy(express));
    // res.json(data);
});
// 添加一篇新文章，URL+动词

app.listen(8888);