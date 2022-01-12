let mySound;
let rot = 0;
let rotSpeed = 0.1;
let isPressed = 0;
let max = 25;
let x = 0;
let y = 0;
let z = 0;
let rand = 0;
let value = 150;


function setup() {
  createARCanvas();
  // soundFormats('mp3', 'ogg');
  // mySound = loadSound('BLOOP');
}

function draw() {
  if (isPressed%2 == 0) {
    translate(x, y, z);
    fill(240, 100, 100);
    box(5);
  }
  else {
    translate(x, y, z);
    fill(100, 100, 240);
    box(5);
  }
}

function touchStarted(){
  isPressed += 1;
  x = Math.random() * max + 5;
  y = Math.random() * max + 5;
  z = Math.random() * max + 5;
  // mySound.play();
}
