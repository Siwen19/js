var maxDepth = function(root) {
    let res = [];
    function deeper(node, deep) { 
        if (!node)  return; 
        if (node.left === null && node.right === null) {
            res.push(deep);
            return;
        }
        deep++;
        deeper(node.left, deep);
        deeper(node.right, deep); 
    }
    if (!root) return 0;
    deeper(root, 1);
    let maxDeep = Math.max(...res);
    return maxDeep;
};