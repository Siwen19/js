## BFC
Block formatting contexts

## 新建一个BFC
- float
- absolute 
- display: inline blocks || table cell || table-caption || flex || grid
- overflow 不为 visible
- 根元素默认为新建BFC

## 格式化上下文
koa: ctx === context

## flex 布局
react-native 只支持flex, RN已经证明只用flex是可以很好地完成布局

## float
文字环绕的
float 用来 布局了，float清除
clear：both（left， right）

## BFC规则
- 垂直方向上，从上往下布局
- 垂直方向上的距离由margin决定
- 同一个BFC之内，垂直方向上block-level-box margin会折叠（留白）-> margin.html
- 由于有float元素，一个盒子的大小可能会缩小，除非它是新建BFC -> float.html
- BFC 区域不会 float 重叠 （左侧固定，右边自适应）

## layout
normal flow
position    
float: 文字环绕     布局：几行几列
flex
