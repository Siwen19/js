// N叉树的最大深度
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0;
    let queue = [root];
    let res = [];
    while (queue.length) {
        let cell = [];
        let rowNodes = queue.splice(0);
        for (let node of rowNodes) {
            cell.push(node.val);
            if (node.children) {
                for (let i of node.children) {
                    queue.push(i);
                }
            };
        }
        res.push(cell);
    }
    return res.length;
};