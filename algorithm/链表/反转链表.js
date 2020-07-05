var reverseList = function(head) {   
    // 暂存 指向 归位
    let pre = null;
    let cur = head; 
    while (cur !== null) {
        let temp = cur.next;
        // 指向
        cur.next = pre;
        // 归位
        pre = cur;
        cur = temp;
    }
    return pre;
};