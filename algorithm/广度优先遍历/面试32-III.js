var levelOrder = function(root) {
    if (root === null) return [];
    let queue = [ root ];
    let res = [];

    while(queue.length) {
        let rowNodes = queue.splice(0); 
        let cell = [];
        for (let node of rowNodes) {
            cell.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }  
        res.push(cell)
    }
    for (let i=0; i < res.length - 1; i+=2) {
        res[i + 1].reverse();
    }
    return res;
};