var maxAreaOfIsland = function(grid) {
  if (!grid.length) return 0
  let uf = new UninFind(grid)

  let rows = grid.length
  let cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) continue
      if (i + 1 < rows && grid[i + 1][j] === 1)
        uf.union(i * cols + j, (i + 1) * cols + j)
      if (j + 1 < cols && grid[i][j + 1] === 1)
        uf.union(i * cols + j, i * cols + j + 1)
    }
  }
  return uf.max()
}
function UninFind(grid) {
  let rows = grid.length
  let cols = grid[0].length
  this.arr = Array(rows * cols + 1).fill(rows * cols)

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) this.arr[i * cols + j] = -1
    }
  }
}

UninFind.prototype.find = function(x) {
  if (this.arr[x] < 0) return x
  return this.find(this.arr[x])
}

UninFind.prototype.union = function(x, y) {
  let xparent = this.find(x)
  let yparent = this.find(y)
  if (xparent === yparent) return
  let xSize = this.arr[xparent]
  let ySize = this.arr[yparent]
  if (xSize < ySize) {
    this.arr[xparent] = yparent
    this.arr[yparent] = ySize + xSize
  } else {
    this.arr[yparent] = xparent
    this.arr[xparent] = ySize + xSize
  }
}
UninFind.prototype.max = function() {
  let max = 0
  let len = this.arr.length
  for (let i = 0; i < len; i++) {
    if (this.arr[i] < 0) max = Math.max(-this.arr[i], max)
  }
  return max
}