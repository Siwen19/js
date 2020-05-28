"use strict";
// 变量
var RFS_METHOD;
if ('requestFullScreen' in document.body) {
    RFS_METHOD = 'requestFullScreen';
}
else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
}
else if ('msRequestFullScreen' in document.body) {
    RFS_METHOD = 'msRequestFullScreen';
}
function beFull(el) {
    // 检查兼容性
    el[RFS_METHOD]();
}
var btn = document.querySelector('#btn');
var box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        // box.requestFullscreen();
        if (box instanceof Element) {
            beFull(box);
        }
    });
}
