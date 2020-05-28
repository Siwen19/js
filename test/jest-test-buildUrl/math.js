function add (a, b) {
  return a + b
}
function minus (a, b) {
  return a - b
}

function encode (str) {
  return encodeURIComponent(str)
    .replace('%5B', '[').replace('%5D', ']')
}
function buildUrl (url, params) {
  let parts = []
  // Object.keys() 获取对象所有的 key 
  Object.keys(params).forEach(function (key) {
    let value = params[key]
    if (value === null || typeof value === 'undefined')
      return

    // 将不是数组的 转化为数组   
    //  逻辑 统一
    if (Array.isArray(value)) {
      key += '[]'
    }else {
      value = [value]
    }
    console.log(key, value)
    // 循环
    value.forEach(val => {
      let part = `${encode(key)}=${encode(value)}`
      parts.push(part)
      console.log(part)
    })
  })
  console.log(parts)
  console.log(parts.join('&'))
  // #后面的不传输到 后端  因此 #后面的内容要裁剪掉

  const hashIndex = url.indexOf('#')
  if (hashIndex !== -1) {
    url = url.slice(0, hashIndex)
  }
  const hashA = url.indexOf('?')
  //   console.log(hashA)
  if (hashA == -1) {
    url += '?' + parts.join('&')
  }else {
    url += '&' + parts.join('&')
  }
  console.log(url)
  return url
}

function flat (arr) {
  let res = []
  for (let el of arr) {
    if (Array.isArray(el)) {
      res = res.concat(flat(el))
    }else {
      res = res.concat(el)
    }
  }
  return res
}

// const http = require('http')
// 定义一个自己的模块
// 导出
module.exports = {
  add,
  minus,
  buildUrl,
flat}
