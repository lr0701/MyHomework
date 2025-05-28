function isBipartite(graph) {
    const colors = new Array(graph.length).fill(-1);

    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === -1) {
            if (!dfs(i, graph, colors, 0)) {
                return false;
            }
        }
    }
    return true;
}

function dfs(node, graph, colors, color) {
    colors[node] = color;

    for (const neighbor of graph[node]) {
        if (colors[neighbor] === -1) {
            if (!dfs(neighbor, graph, colors, 1 - color)) {
                return false;
            }
        } else if (colors[neighbor] === color) {
            return false;
        }
    }
    return true;
}


const graph1 = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]];
console.log(isBipartite(graph1)); 

const graph2 = [[1, 2, 3], [0, 2], [0, 3], [1, 3]];
console.log(isBipartite(graph2)); 
