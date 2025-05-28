var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while (cur) {
        let nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
};

var addTwo = function(l1, l2) {
    let dummy = new ListNode(); 
    let cur = dummy;
    let carry = 0; 
    while (l1 || l2 || carry) {
        if (l1) carry += l1.val; 
        if (l2) carry += l2.val; 
        cur = cur.next = new ListNode(carry % 10); 
        carry = Math.floor(carry / 10); 
        if (l1) l1 = l1.next; 
        if (l2) l2 = l2.next;
    }
    return dummy.next; 
};

var addTwoNumbers = function(l1, l2) {
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    let l3 = addTwo(l1, l2);
    return reverseList(l3);
}