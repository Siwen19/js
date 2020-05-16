const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  if (req.url === '/files' && req.method.toLowerCase() === 'post') {
    parseFile(req, res)
  } else {
    fs.createReadStream('./index.html').pipe(res)
  }
})
  .listen(9090, () => {
    console.log('ok')
  })
function parseFile (req, res) {
  req.setEncoding('binary')
  let body = ''
  let boundary = req.headers['content-type'].split('boundary=')[1]
  // console.log(boundary)
  req.on('data', (chunk) => {
    console.log(chunk)
    body += chunk
    console.log('****' + body + '****')
  })
  req.on('end', () => {

    let lists = body.split('--' + boundary)
    console.log('-----------' + lists)
    for (let list of lists) {
      // 拿到每一行的内容
      let lines = list.split('\r\n')
      console.log(lines)
      let fileName = ''
      if (lines[1] && lines[1].includes('filename=')) {
        let startIndex = lines[1].indexOf('filename=')
        fileName = lines[1].substring(startIndex)
        fileName = fileName.split('=')[1].replace('"', '').replace('"', '')
        console.log('fileName', fileName)
        fs.writeFile(`./${fileName}`, lines[4], {encoding: 'binary'}, (err) => {
          if (!err) {
            res.end('okok')
          } else {
            res.end(err.toString())
          }
        })
      }
    }
  })
}
