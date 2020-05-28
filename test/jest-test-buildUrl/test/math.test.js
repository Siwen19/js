const {add, minus, buildUrl, flat} = require('../math')

test('测试加法', () => {
  expect(minus(3, 7)).toBe(-4)
})
test('测试减法', () => {
  expect(add(3, 7)).toBe(10)
})
test('测试buildUrl', () => {
  let url = '/abc'
  let params = {
    a: 1,
    b: 2
  }
  expect(buildUrl(url, params)).toEqual('/abc?a=1&b=2')
  params.c = null
  params.d = undefined
  expect(buildUrl(url, params)).toEqual('/abc?a=1&b=2')
  url = '/abc#header'
  expect(buildUrl(url, params)).toEqual('/abc?a=1&b=2')
  url = '/abc?arr[]=1'
  // /abc?arr[]=1?a=1&b=2
  let resURL = buildUrl(url, params)
  let compare = resURL === '/abc?arr[]=1&a=1&b=2'
  expect(compare).toBeTruthy()
}) 
test('测试拍平', () => {
  // 基本  toBe
  // array object 用 toEqual
  expect(flat([1, [2, [3]]])).toEqual([1, 2, 3])
})
