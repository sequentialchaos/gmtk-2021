const TICK = 0.25  // each polyomino falls every _ seconds
const FRAMERATE = 30

const SPACE_BAR = 32

let isLooping = true
let polyomino

function setup() {
  createCanvas(windowHeight * 9 / 16, windowHeight).center('horizontal')
  colorMode(HSB, 1, 1, 1, 1)

  frameRate(FRAMERATE)
  polyomino = new Polyomino(tetrominoes[1], 30, 'purple')

}

function draw() {
  background(0.2)
  if (frameCount % (TICK * FRAMERATE) == 0) {
    polyomino.fall()
  }
  polyomino.show()
}

function keyPressed() {
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