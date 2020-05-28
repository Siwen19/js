// 联合类型 定义一个类型
type RFSmethods = 'requestFullScreen' | 'webkitRequestFullScreen'
    | 'mozRequestFullScreen' | 'msRequestFullScreen';
// 接口
interface Element {
    webkitRequestFullScreen(): any
    requestFullScreen(): any
    mozRequestFullScreen(): any
    msRequestFullScreen(): any
}
// 变量
let RFS_METHOD: RFSmethods;
if ('requestFullScreen' in document.body) {
    RFS_METHOD = 'requestFullScreen';
} else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
} else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
} else if ('msRequestFullScreen' in document.body) {
    RFS_METHOD = 'msRequestFullScreen';
}
function beFull(el: Element) {
    // 检查兼容性
    el[RFS_METHOD]();
}
const btn = document.querySelector('#btn');
const box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        // box.requestFullscreen();
        // Element 是内置的一个类 html标签 都是 Element 实例
        if (box instanceof Element) {
            beFull(box);
        }
    })
}

