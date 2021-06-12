const tetrominoes = [
  [
    [1, 1, 1, 1]
  ],
  [
    [0, 1, 0],
    [1, 1, 1]
  ],
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 0, 0],
    [1, 1, 1]
  ],
  [
    [0, 0, 1],
    [1, 1, 1]
  ]
]

class Polyomino {
  constructor(shape, cellSize, color) {
    this.shape = shape
    this.cellSize = cellSize
    this.color = color
    this.x = 0
    this.y = 0
    this.bottom = 0
  }

  rotateLeft() {
    let newShape = []
    for (let j = this.shape[0].length - 1; j >= 0; j--) {
      newShape.push([])
      let k = this.shape[0].length - j - 1
      for (let i = 0; i < this.shape.length; i++) {
         newShape[k].push(this.shape[i][j])
      }
    }
    this.shape = newShape
  }

  rotateRight() {
    let newShape = []
    for (let j = 0; j < this.shape[0].length; j++) {
      newShape.push([])
      for (let i = this.shape.length - 1; i >= 0; i--) {
         newShape[j].push(this.shape[i][j])
      }
    }
    this.shape = newShape
  }

  moveLeft() {
    this.x -= 1
  }

  moveRight() {
    this.x += 1
  }

  fall() {
    this.y += 1
  }

  show() {
    push()
    fill(this.color)
    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        let value = this.shape[i][j]
        if (value != 0) {
          rect(this.cellSize * (this.x + j), this.cellSize * (this.y + i), this.cellSize, this.cellSize)
        }
      }
    }
    pop()
  }

}