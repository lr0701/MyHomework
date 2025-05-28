var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);
    let p0 = dummy;
    for (let i = 0; i < left - 1; i++) {
        p0 = p0.next;
    }

    let pre = null;
    let cur = p0.next;
    for (let i = 0; i < right - left + 1; i++) {
        const nxt = cur.next;
        cur.next = pre; 
        pre = cur;
        cur = nxt;
    }
    p0.next.next = cur;
    p0.next = pre;
    return dummy.next;
};