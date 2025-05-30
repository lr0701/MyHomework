var floodFill = function(image, sr, sc, newColor) {
    let row = image.length;
    let column = image[0].length;
    const color = image[sr][sc];
    if (color === newColor) return image;
    const queue = [[sr, sc]];
    while(queue.length) {
        const cur = queue.shift();
        if (cur[0] >= 0 && cur[0] < row && cur[1] >= 0 && cur[1] < column && image[cur[0]][cur[1]] === color) {
            image[cur[0]][cur[1]] = newColor;
            queue.push([cur[0] + 1, cur[1]]);
            queue.push([cur[0] - 1, cur[1]]);
            queue.push([cur[0], cur[1] + 1]);
            queue.push([cur[0], cur[1] - 1]);
        }
    }

    return image;
};