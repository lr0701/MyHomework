function findRedundantConnection(edges) {
    const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }

    for (let [a, b] of edges) {
        if (find(a) === find(b)) {
            return [a, b];
        }
        union(a, b);
    }
    return [];
}

// 示例测试
console.log(findRedundantConnection([[1,2],[1,3],[2,3]])); // 输出: [2,3]
console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]])); // 输出: [1,4]
