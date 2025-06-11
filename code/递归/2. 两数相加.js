var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(); 
    let cur = dummy;
    let carry = 0; 
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val; 
            l1 = l1.next; 
        }
        if (l2) {
            carry += l2.val; 
            l2 = l2.next; 
        }
        cur = cur.next = new ListNode(carry % 10); 
        carry = Math.floor(carry / 10); 
    }
    return dummy.next; 
};