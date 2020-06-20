// 二叉树的堂兄弟节点
var isCousins = function (root, x, y) {
    let res = [];
    function calculatePath(node, path) {
        if (node === null) return [];
        path.push(node.val);
        if (node.left === null && node.right === null) {
            res.push(path);
            return;
        }
        calculatePath(node.left, path.slice(0));
        calculatePath(node.right, path.slice(0));
    }
    calculatePath(root, []);

    for (let arr of res) {
        if (arr.indexOf(x) !== -1) {
            arrLeft = arr.slice(0, arr.indexOf(x) + 1);
        }
        if (arr.indexOf(y) !== -1) {
            arrRight = arr.slice(0, arr.indexOf(y) + 1);
        }
    }
    if (arrLeft.length !== arrRight.length) return false;
    if (arrLeft[arrLeft.length - 2] === arrRight[arrRight.length - 2]) return false;
    return true;
};