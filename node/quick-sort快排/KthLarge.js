var findKthLargest = function (nums, k) {
    let i = 0,
        j = nums.length - 1;
    let index = partition(nums, i, j);
    k = nums.length - k;
    while (index !== k) {
        if (index < k) {
            i = index + 1;
          } else {
            j = index - 1;
          }
          index = partition(nums, i, j);
        }
        return nums[index]; 
}

function partition(nums, left, right) {
    let provit = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= provit) right--;
        nums[left] = nums[right];
        while (left < right && nums[left] <= provit) left++;
        nums[right] = nums[left];
    }
    nums[left] = provit;
    return left;
}
// const arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];
// const arr = [8, 9, 7, -1, 5];
// partition(arr, 0, arr.length - 1);
// console.log(arr);

// 2
// var findKthLargest = function (nums, k) {
//     let i = 0, j = nums.length - 1;
    // 基准 -> index
    // let index = partition(nums, i, j);
    // 基准 是不是 第 k 
    // [8, 9, 7, -1, 5] k = 2 > 1 2 3
    // partition: [5, -1, 7, 8, 9]
    // 第K个最大元素：从大到小    2
    // [9， 8， 7， 5， -1]
    // 从小到大：K 从小到大排列 nums.length - k 
    // [-1， 5， 7， 8， 9]
    // 倒数： 第 k 大元素 
//     k = nums.length - k
//     while (index !== k) {
//         if (index < k) {
//             i = index + 1;
//         } else {
//             j = index - 1;
//         }
//         index = partition(nums, i, j);
//     }
//     return nums[index];
// }

// function partition(nums, left, right) {
//     let i = left;
//     let j = right;
//     let provit = nums[left];
//     while (left < right) {
//         // left right 互相替换
//         // right 替换 left 位置
//         // left 替换 right 位置
//         // 1: 右边扫描，比基准值小数，如果这个数比基准值大，一直往前走
//         while (left < right && nums[right] >= provit) right--;
//         nums[left] = nums[right];
//         // 2: 左边扫描 比基准值大数
//         while (left < right && nums[left] <= provit) left++;
//         nums[right] = nums[left];
//     }
//     nums[left] = provit;
//     return left;
// }