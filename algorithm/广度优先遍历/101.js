// 对称二叉树
var isSymmetric = function (root) {
    if (root === null) return true;
    let res = [];
    function findPath(node, path) {
        path.push(node.val);
        if (node.left === null && node.right === null) {
            res.push(path);
            return;
        }
        if (node.left === null || node.right === null) {
            res.push(path);
            return;
        }
        findPath(node.left, path.slice(0));
        findPath(node.right, path.slice(0));
    }
    findPath(root, []);
    for (let i = 0; i < res.length / 2; i++) {
        if (res[i].length !== res[res.length - i - 1].length) return false;
        if (res[i].join('') != res[res.length - i - 1].join('')) return false;
    }
    return true;
};