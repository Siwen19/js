function sum(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    let newA = a ^ b;   //15 //10
    let newB = (a & b) << 1; //1 //2
    return sum(newA, newB);
}
console.log(sum(9, 3));
// 1001 0011 1010 10
// 1001 0011 00010 后面补一位 2