var levelOrder = function (root) {
    if (root === null) return [];
    let queue = [ root ];
    let res = [];
    while (queue.length) {
        // 下一层的元素 拿到上一层的所有元素    遍历上一层所有元素 取出所有 .left   .right
        let rowNodes = queue.splice(0);
        // 上一层的元素 拷贝一份 都出队列
        for (let node of rowNodes) {
            res.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
}

// 广度优先
let queue = [xxx];
while(queue.length) {
    // 出队列
    // 入队列
}