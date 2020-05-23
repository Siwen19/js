## this 
***运行时***决定的, 跟定义时无关
书写的时候
```js
function foo() {
    this.a + b;
}
foo()
```
- 默认 this 指向 window
- 对象. 调用

- call\apply 调用，指向我们的第一个参数