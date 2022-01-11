let mySound;
let rot = 0;
let rotSpeed = 0.1;
let isPressed = 0;
let max = 15;
let x = 0;
let y = 0;
let value = 150;


function setup() {
  let canvas = createARCanvas();
}

function draw() {
  rot += rotSpeed;
  
  if (isPressed%2 == 0) {
    translate(x, y, 0);
    fill(240, 100, 100);
    box(5);
    mySound.play();
  }
  else {
    translate(x, y, 0);
    fill(100, 100, 240);
    box(5);
    mySound.play();
  }
}

function touchStarted(){
  isPressed += 1;
  x = Math.random() * max;
  y = Math.random() * max;
}
