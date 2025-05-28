var reverseKGroup = function(head, k) {
    let n = 0;
    for (let cur = head; cur; cur = cur.next) {
        n++;
    }

    const dummy = new ListNode(0, head);
    let p0 = dummy;
    let pre = null;
    let cur = head;

    for (; n >= k; n -= k) {
        for (let i = 0; i < k; i++) { 
            const nxt = cur.next;
            cur.next = pre; 
            pre = cur;
            cur = nxt;
        }
        const nxt = p0.next;
        p0.next.next = cur;
        p0.next = pre;
        p0 = nxt;
    }
    return dummy.next;
};