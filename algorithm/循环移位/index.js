// // [1, 2, 3, 4, 5, 6, 7] k = 3
// // [5, 6, 7, 1, 2, 3, 4]
let arr = [1, 2, 3, 4, 5, 6, 7], k = 3
// function RShift(list, k) {
//     const copy = [...list];
//     const n = list.length;
//     if (k % n === 0) return list;
//     for(let i = 0; i < n; i++) {
//         // 时间复杂度 O(n)
//         // 空间复杂度 O()
//         list[i] = copy[(k + i) % n];  // 左移
//         // [4, 2, 3, 4, 5, 6, 7]
//         // [4, 5, 3, 4, 5, 6, 7]
//         // [4, 5, 6, 4, 5, 6, 7]
//         // [4, 5, 6, 7, 5, 6, 7]
//         // [4, 5, 6, 7, 1, 6, 7]
//     }
//     return list;
// }
// console.log(RShift(arr, k));

// 三次翻转法
// 1. [0, n-k-1]
// 2. [n - k, n - 1]
// 3. [0, n - 1]

function reverse(list, start, end) {
    let t = null;
    while (start < end) {
        t = list[start];
        list[start] = list[end];
        list[end] = t;
        start ++;
        end --;
    }
}
function RShift(list, k) {
    let n = list.length;
    if (k % n === 0) return;
    reverse(list, 0, n-k-1);
    reverse(list, n-k, n-1);
    reverse(list, 0, n-1);
    return list;
}
console.log(RShift(arr, k));
