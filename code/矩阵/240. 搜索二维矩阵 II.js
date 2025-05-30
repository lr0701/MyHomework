
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    for(let i=m-1,j=0;i>=0&&j<n;){
        if(matrix[i][j] == target)
            return true;
        else if(matrix[i][j] < target)
            j += 1;
        else
            i -= 1;
    }
    return false;
};