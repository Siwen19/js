// 二叉树的锯齿形层次遍历
var zigzagLevelOrder = function (root) {
    if (root === null) return [];
    let queue = [root];
    let res = [];

    while (queue.length) {
        let cell = [];
        let rowNodes = queue.splice(0);
        for (let node of rowNodes) {
            cell.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(cell);
    }
    for (let i = 1; i <= res.length - 1; i += 2) {
        res[i].reverse();
    }
    return res;
};