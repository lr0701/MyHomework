const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 
var spiralOrder = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const ans = Array(m * n);
    let i = 0, j = 0, di = 0;
    for (let k = 0; k < m * n; k++) { 
        ans[k] = matrix[i][j];
        matrix[i][j] = Infinity; 
        const x = i + DIRS[di][0];
        const y = j + DIRS[di][1]; 
        if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] === Infinity) {
            di = (di + 1) % 4;
        }
        i += DIRS[di][0];
        j += DIRS[di][1]; 
    }
    return ans;
};