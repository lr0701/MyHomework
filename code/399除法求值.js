var calcEquation = function(equations, values, queries) {
    const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [u, v] = equations[i];
        const val = values[i];
        if (!graph[u]) {
            graph[u] = {};
        }
        if (!graph[v]) {
            graph[v] = {};
        }
        graph[u][v] = val;
        graph[v][u] = 1 / val;
    }

    const dfs = (start, end, visited) => {
        if (!graph[start] ||!graph[end]) {
            return -1;
        }
        if (start === end) {
            return 1;
        }
        visited.add(start);
        for (let neighbor in graph[start]) {
            if (!visited.has(neighbor)) {
                const subResult = dfs(neighbor, end, visited);
                if (subResult!== -1) {
                    return subResult * graph[start][neighbor];
                }
            }
        }
        return -1;
    };
    const results = [];
    for (const query of queries) {
        const [start, end] = query;
        const visited = new Set();
        const result = dfs(start, end, visited);
        results.push(result);
    }
    return results;
};