// 二叉树的右视图
var rightSideView = function (root) {
    if (root === null) return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let rowNodes = queue.splice(0);
        let cell = [];
        for (let node of rowNodes) {
            cell.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(cell.pop());
    }
    return res;
};