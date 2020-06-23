// 0x62 十六进制
// const buf = Buffer.from([0x62,  0x75, 0x66, 0x66, 0x65, 0x72]);
// console.log(buf.toString());

const array = 'hello world'.split('').map((ele) => {
    return '0x' + ele.charCodeAt(0).toString(16);
})
const buf = Buffer.from(array);
console.log(array);