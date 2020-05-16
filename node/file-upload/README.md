# 编码和文件上传
## Content-Type: text/plain
 提交给后端的数据就是纯文本
 ```js
name=123
file=Individual Report_0174149_Candy.docx
 ```

 ## Content-Type: application/x-www-form-urlencoded
 ```js
 name=123&file=Individual+Report_0174149_Candy.docx
 ```

 ## multipart/form-data
 ```js
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"\r\n
Content-Type: text/plain\r\n
\r\n
123456789\r\n
\r\n
-----------------------------205579936434786223734260171678--
 ```
 前面两种编码对二进制文件或者一些非 ASCII 字符 处理很低效

 后端文件处理上传：
 - 分隔符分隔
 - 得到分隔之后的每一块，文件内容，fs.write() 保存文件
 - 完成
