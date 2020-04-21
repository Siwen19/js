const hightLight = document.createElement('div')
hightLight.classList.add('bgc')
const allLinks = document.querySelectorAll('a')
// 插入页面上
document.body.appendChild(hightLight)
allLinks.forEach(function (aNode) {
  aNode.addEventListener('mouseenter', function (event) {
    // event对象
    const size = aNode.getBoundingClientRect() 
    hightLight.style.width = aNode.offsetWidth + 'px'
    hightLight.style.height = aNode.offsetHeight + 'px' 
    hightLight.style.transform = `translateX(${size.left}px) translateY(${aNode.offsetTop}px)` 
  })
})
