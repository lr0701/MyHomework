function findCircleNum(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);

    let count = 0;

    function dfs(city) {
        visited[city] = true;
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    return count;
}


console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); 
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])); 