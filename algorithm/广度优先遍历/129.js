var sumNumbers = function(root) {
    let res = [];
     function calculatePath(node, path) {
        if (node === null) return [];
        path.push(node.val);
        if (node.left === null && node.right === null) {
            let str = path.join(''); 
            res.push(str); 
            return;
        }
        calculatePath(node.left, path);
        calculatePath(node.right, path);
     }
     calculatePath(root, []); 
     let sum = res.reduce((a, b) => parseInt(a) + parseInt(b), 0);
     return sum;
}; 