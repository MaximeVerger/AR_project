let mySound;
let rot = 0;
let rotSpeed = 0.1;
let isPressed = 0;
let max = 15;
let x = 0;
let y = 0;
let value = 150;


function setup() {
  createARCanvas();
  // soundFormats('mp3', 'ogg');
  // mySound = loadSound('BLOOP');
}

function draw() {
  if (isPressed%2 == 0) {
    translate(x, y, 0);
    fill(240, 100, 100);
    box(5);
  }
  else {
    translate(x, y, 0);
    fill(100, 100, 240);
    box(5);
  }
}

function touchStarted(){
  isPressed += 1;
  x = Math.random() * max;
  y = Math.random() * max;
  // mySound.play();
}
