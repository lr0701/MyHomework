class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const visited = new Map();

    function dfs(node) {
        if (visited.has(node.val)) {
            return visited.get(node.val);
        }
        
        const newNode = new Node(node.val);
        visited.set(node.val, newNode);

        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor));
        }

        return newNode;
    }

    return dfs(node);
};


const graph = {
    val: 1,
    neighbors: [
        { val: 2, neighbors: [{ val: 4, neighbors: [] }] },
        { val: 3, neighbors: [{ val: 4, neighbors: [] }] }
    ]
};

const clonedGraph = cloneGraph(graph);
console.log(clonedGraph);
