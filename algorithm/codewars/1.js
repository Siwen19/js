// API 巧妙  正则

// (XXX) XXX-XXXX
// \d{3} \d{3} \d{4}   [0-9]
// 3. 填回去
// - 正则 字符串
//     1. arr.join()
function createPhoneNumber(numbers) {
    // 代码的语意连贯且易读
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
