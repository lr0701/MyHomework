const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 

var generateMatrix = function(n) {
    const ans = Array.from({ length: n }, () => Array(n).fill(0));
    let i = 0, j = 0, di = 0;
    for (let val = 1; val <= n * n; val++) {
        ans[i][j] = val;
        const x = i + DIRS[di][0];
        const y = j + DIRS[di][1];
        if (x < 0 || x >= n || y < 0 || y >= n || ans[x][y] !== 0) {
            di = (di + 1) % 4;
        }
        i += DIRS[di][0];
        j += DIRS[di][1]; 
    }
    return ans;
};