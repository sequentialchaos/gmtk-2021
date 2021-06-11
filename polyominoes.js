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
    for (let j = 0; j < this.shape[0].length; j++) {
      for (let i = 0; i < this.shape.length; i++) {
         
      }
    }
  }

  rotateRight() {

  }

  moveLeft() {
    this.x -= this.cellSize
  }

  moveRight() {
    this.x += this.cellSize
  }

  fall() {
    this.y += this.cellSize
  }

  show() {
    push()
    fill(this.color)
    for (let i = 0; i < this.shape.length; i++) {
      for (let j = 0; j < this.shape[i].length; j++) {
        let value = this.shape[i][j]
        if (value != 0) {
          rect(this.x + this.cellSize * j, this.y + this.cellSize * i, this.cellSize, this.cellSize)
        }
      }
    }
    pop()
  }

}