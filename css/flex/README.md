## flex
主轴
交叉轴
display: flex
flex-direction: row, column
flex-wrap
justify-content 主轴 space-around 中间的间距是两边间距的两倍 space-between space-evenly
### 圣杯 双飞翼
left 固定 main自适应 right固定
html结构：让main在前面
<div>left</div>
<div>main</div>
<div>right</div>
align-items
align-content: strench 平分剩余空间

flex 容器里面每一项
order
flex-grow 有剩余空间的时候放大，全部占满（1），有剩余空间的时候不占满（0）
flex-basis
flex-shrink 没有剩余空间的时候自动缩小（1），没有剩余空间的时候也不缩小（0）
align-self
