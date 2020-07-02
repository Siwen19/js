let arr = [1, 2, 3, 4];
// reduce total
let sum = arr.reduce(function(pre, cur, index, arr) {
    console.log(pre, cur);
    return pre + cur;
});
console.log(sum);