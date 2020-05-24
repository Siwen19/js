const puppeteer = require('puppeteer');
// puppeteer 没有界面的浏览器 人操纵不了 但是可以用代码来执行
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  let input = await page.$('#kw');
  await input.focus();
  await page.keyboard.type('大众点评');
  let btn  = await page.$('#su');
  await btn.click();
//   内容不是立马出来的
setTimeout(async () => {
    await page.pdf({path: 'hn.pdf', format: 'A4'});
    await browser.close();
}, 3000); 
  
})();