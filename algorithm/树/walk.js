let tree = {
    val: 'F',
    left: {
        val: 'C',
        left: {
            val: 'A'
        },
        right: {
            val: 'D'
        }
    },
    right: {
        val: 'E'
    }
}
var preorderTraversal = function(root) {
    let arr = [];
    function helper(node) {
        if (node) {
            let val = node.val;
            arr.push(val); 
            // 遇到左子树 也要 root left right 顺序
            helper(node.left);
            // 遇到右子树 也要 root left right 顺序
            helper(node.right); 
        }
    }
    helper(root);
    return arr;
}
console.log(preorderTraversal(tree));
// 递归 函数调用栈
// 循环 stack 