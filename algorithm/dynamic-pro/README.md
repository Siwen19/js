# 动态规划

负责论坛 圈子 问答 前端开发 优质内容越来越多的时候

搜索的错误纠正 背后在发生什么？
facebook 专有名字 频繁
输入了一个跟facebook 相似度比较高的 
faeebook 有能力有责任更正
数据 检索 历史（频繁度）

mysql 有个表 放着常用的，专有名词
计算机 算法 计算 用户输入跟库里的哪个词 最接近

实现？
莱文斯坦距离  可以算出来？

mitcmu     i
mtacnu ?   j 穷举
一次编辑 mit t 前面插入一个 i
第二次 mit a 删除
第三次 n 改变成 m 就好

莱文斯坦距离

- 为什么有不同的结果，
  算法的决策过程不够 计算机化
- 递归 增删改 三种操作 

i, j 编辑距离 0 a[i] == b[j]
i, j 如果不等 a[i] != b[j]
    增删改 哪一种更加的合适我们的目标 最小的莱文斯坦距离 决定吧？
length 相等 特殊 改 并不一定哦 还有更多解
没有捷径的 无限的可能
0, 0, 0 最短的0

逐步考察 i, j edist

