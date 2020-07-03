let arr = [16, 1, 75, 38, 24, 17, 38, 45, 61]
function bubble (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
console.log(bubble(arr))

function nextBubble (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  return arr
}

function swap (arr, left, right) {
  let rightValue = arr[right]
  arr[right] = arr[left]
  arr[left] = rightValue
}
console.log(nextBubble(arr))
