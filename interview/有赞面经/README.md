# 有赞一面凉经

- css选择器有哪些

- 选择器的优先级
1,0,0,0 style=""
0,1,0,0 id
0,0,1,0 class
0,0,0,1 元素 div h2
0,0,0,0 * > + ~ 

10 个 class 和 一个 ID

- flex布局

- postion有哪些属性

absolute，relative，fixed定位的区别
relative 相对于自身 且 不脱离文档流
absolute 相对于包含块

- es6新特性
let const ()=> 
es5和es6写法上有什么不同 

- let,const,var的区别
let const 块级作用域 var是没有的
var 变量提升
暂时性死区

- 箭头函数和普通函数的区别
1. this
2. 普通函数可以 new 箭头函数不能 new

- js异步处理方式有哪些
1. Promise
2. sync + await

- promise有哪些静态方法
Promise.all es6
Promise.race es6
Promise.allSettled es10+

## 怎么实现一个Promise.all ? 2.html

- js的数据类型


- 什么是闭包，闭包可以用来做什么
（作用域）词法环境

- js有哪些类型检查的方法

- instance of在原型链上的查找方式，是递归还是...？
1. 判断构造上面存不存在一个 Symbol.hasInstance 方法
    如果有，取这个方法的返回值
2. 否则判断左边这个对象的原型链上 存不存在右边这个构造函数的 .proptype

- call,bind,apply的区别

- 浏览器事件模型，一个点击按钮点完发生了什么？
事件流

如何对多个事件进行处理？

跨域，同源策略

jsonp的原理

cors跨域有哪些头部

cookie,seesion,localstorage的区别