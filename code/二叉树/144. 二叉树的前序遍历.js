// 迭代解法
var preorderTraversal = function(root) {
    if (!root) return []
    const stack = [], res = []
    stack.push(root)
    while (stack.length) {
        const curr = stack.pop()
        res.push(curr.val)
        if (curr.right) stack.push(curr.right)
        if (curr.left) stack.push(curr.left)
    }
    return res
};

