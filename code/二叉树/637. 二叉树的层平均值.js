var averageOfLevels = function(root) {
    var res = [];
    var queue = [[root, 1]];
    while (queue.length) {
        var data = queue.shift();
        var node=data[0], level=data[1];

        if (res.length < level) {
            res.push([node.val]);
        } else {
            res[level-1].push(node.val);
        }

        if (node.left) {
            queue.push([node.left, level+1]);
        }
        if (node.right) {
            queue.push([node.right, level+1]);
        }
    }

    return [...res.map(x => _.sum(x)/x.length)];
};
