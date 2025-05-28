function networkDelayTime(times, n, k) {
    
    const graph = Array.from({ length: n + 1 }, () => []);
    const dist = Array(n + 1).fill(Infinity);
    dist[k] = 0;

    
    times.forEach(([u, v, w]) => {
        graph[u].push([v, w]);
    });

    
    const visited = new Set();
    const queue = [k];

    while (queue.length) {
        const node = queue.shift();
        visited.add(node);

        graph[node].forEach(([neighbor, weight]) => {
            if (!visited.has(neighbor) && dist[node] + weight < dist[neighbor]) {
                dist[neighbor] = dist[node] + weight;
                queue.push(neighbor);
            }
        });
    }

    
    let allReceived = true;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) {
            allReceived = false;
            break;
        }
    }

    
    return allReceived ? Math.max(...dist.slice(1)) : -1;
}


console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2)); 
console.log(networkDelayTime([[1,2,1]], 2, 1));
console.log(networkDelayTime([[1,2,1]], 2, 2)); 
