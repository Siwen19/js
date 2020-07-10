## commonJS
导出:
module.exports = function() {} / {}
导入:
require
commonJS 一定要代码运行起来才知道引入了哪些模块
            可以出现在逻辑分支里面

## es-module
1. import / export 不论写在哪里都会提前执行
2. 在代码静态分析（代码不用执行代码），就可以分析出引入了哪些模块

AMD, CMD, UMD（统一模块化方案）, CJS, es
