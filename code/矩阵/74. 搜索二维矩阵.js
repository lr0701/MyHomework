var searchMatrix = function(matrix, target) {
    let xlen = matrix.length;
    if(xlen <= 0){
        return false;
    }
    let ylen = matrix[0].length;
    if(target > matrix[xlen-1][ylen-1] || target < matrix[0][0]){
        return false;
    }
    let i = 0, j = ylen-1;
    while( i < xlen && j >= 0){
        if(matrix[i][j] == target){
            return true;
        }else if(matrix[i][j] < target){
            i++;
        }else if(matrix[i][j] > target){
            j--;
        }
    }
    return false;  
};