function partition(nums, left, right) {
    if (left >= right) return;
    let j = right;
    let provit = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= provit) right--;
        nums[left] = nums[right];
        while (left < right && nums[left] <= provit) left++;
        nums[right] = nums[left];
    }
    nums[left] = provit;
    console.log(left);
    partition(nums, 0, left - 1);
    partition(nums, left + 1, j);
}
const arr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];
// const arr = [8, 9, 7, -1, 5];
partition(arr, 0, arr.length - 1);
console.log(arr);