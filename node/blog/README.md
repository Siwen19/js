## 怎样向我们的应用提供数据？
- 爬取 cherrio
- MVC Model(Mysql)-View(React)-Controller(Node)
- 简单服务的话，json文件作为资源，代替数据库，使用json-server来启动它restful api格式
    post
    可以实现增删改查，但不像启用MySQL这么繁琐
**PS: /posts/show/1**
    不能用动词show /posts/1

#### JSON 是数据格式

## 汇款需求，从账户1向账户2汇款500元
1. /account/:1/transfer/:520/to/:2
2. resutful 动词 + url(动词)
3. /transaction 转账 POST
4. {from:1, to:2, amount: 500}
5. Restful 是后端在设计URL的国际规范