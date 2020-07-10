import { add } from "./math.js";
// 只用到了 add, 为了优化代码体积，可以直接删除 minus rollup(打包工具)
let sum = add(1, 2);
let sum1 = sum + 2;
console.log(sum1)