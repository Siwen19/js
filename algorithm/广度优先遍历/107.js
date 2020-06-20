var levelOrderBottom = function (root) {
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
        // 从 底层 向上
        res.splice(0, 0, cell);
    }
    return res;
};