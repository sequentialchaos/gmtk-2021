const TICK = 1  // each polyomino falls every _ seconds
const FRAMERATE = 30
const NUM_ROWS = 20
const NUM_COLUMNS = 8

let isLooping = true

const Q = 81
const E = 69
const A = 65
const S = 83
const D = 68
const SPACE_BAR = 32

let polyomino, cellSize

function setup() {
  cellSize = 32
  createCanvas(cellSize * NUM_COLUMNS, cellSize * NUM_ROWS).center('horizontal')
  colorMode(HSB, 1, 1, 1, 1)

  frameRate(FRAMERATE)
  cellSize = 
  polyomino = new Polyomino(tetrominoes[3], 30, 'purple')

}

function draw() {
  background(0.2)
  if (frameCount % (TICK * FRAMERATE) == 0) { 
    polyomino.fall()
  }
  polyomino.show()
}

function keyPressed() {
  if (keyCode == Q) {
    polyomino.rotateLeft()
  }
  if (keyCode == E) {
    polyomino.rotateRight()
  }
  if (keyCode == A) {
    polyomino.moveLeft()
  }
  if (keyCode == S) {
    polyomino.fall()
  }
  if (keyCode == D) {
    polyomino.moveRight()
  }
  if (keyCode == SPACE_BAR) {
    if (isLooping) {
      isLooping = false
      noLoop()
    }
    else {
      isLooping = true 
      loop()
    }
  }
}