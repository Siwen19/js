## normal flow
行内元素(inline-level-box): 水平从左往右一个接着一个布局,垂直方向默认以baseLine对齐 -> vertical-align: middle;
块级元素(block-level-box): 垂直方向从上往下一个接着一个布局

## baseLine
inline 没有任何文字的时候，baseLine在底部，img以baseLine（把行撑高了）

## position 
absolute:父级第一个非static ❌, 相对于它的containing block
fixed:viewport  ❌
首先确定包含块的位置大小

## containing block
盒子大小、尺寸都是根据我们包含块来计算的，
一个盒子的包含块：containing block箱子，箱子装着元素,箱子里面的元素放在哪里？大小？
首先确定包含块的位置大小
```css
width: 100%;  //  父级
height: 100%;
padding
margin
...百分比：相对于包含块来计算

```


## 怎么确定包含块的位置？
确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

- 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块级元素（比如说inline-block, block 或 list-item元素）
- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素。
- 如果 position 属性是 fixed，是 viewport,
- 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
  - transform / perspective 不是 none
  - will-change 是 transform， perspective
  - filter不是 none 或者 will-change 是 filter(only works on Firefox).
  - contain 是 paint (例如: contain: paint;)
