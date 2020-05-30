const qs = (arr) => {
    if (arr.length <= 1) return arr;
    let left = [];
    let right = [];
    let provit = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < provit) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...qs(left), provit, ...qs(right)];
}
const arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];
// const arr = [8, 9, 7, -1, 5]; 
// 并没有原地交换
console.log(qs(arr));