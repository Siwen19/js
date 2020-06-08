const {add, minus} = require('./math');

// let result = add(3, 7);
// let expected = 10;
 
// if (result !== expected) {
//     throw new Error('3 + 7 = 10');
// }

function expect(result) {
    return {
        toBe: function(value) {
            if (result !== value) {
                throw new Error('预期值和真实值不一样');
            }
        }
    }
}
// 多个错误时 提示不够
function test(desc, fn) {
    // 尽管 try 里面出错了 后面的代码仍可以执行
    try {
        fn();
        console.log(`√: ${desc} is pass.`)
    } catch(err) {
        console.log(`×: ${desc} is failed.`)
    }

}
test('测试加法', () => {
    expect(minus(3, 7)).toBe(-4); 
})
test('测试减法', () => {
    expect(add(3, 7)).toBe(10); 
})