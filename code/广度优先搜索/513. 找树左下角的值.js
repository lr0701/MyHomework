var findBottomLeftValue = function(root) {
    const dfs = (root, height) => {
        if (!root) {
            return;
        }
        height++;
        dfs(root.left, height);
        dfs(root.right, height);
        if (height > curHeight) {
            curHeight = height;
            curVal = root.val;
        }
    }

    let curHeight = 0;
    dfs(root, 0);
    return curVal;
};
