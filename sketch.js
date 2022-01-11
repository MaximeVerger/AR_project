function setup() {
  createARCanvas();
}

let rot = 0;
let rotSpeed = 0.1;
let isPressed = 0;
let max = 15;
let x = 0;
let y = 0;

let value = 150;

function draw() {
  rot += rotSpeed;
  // rotateY(rot);

  // fill(100, 100, 240);
  // box(5);

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

  
  // translate(-5, 0, 0);
  // fill(240, 100, 100);
  // box(5);

  // translate(10, 0, 0);
  // fill(100, 100, 240);
  // box(5);

  // translate(0, -5, 0);
  // fill(100, 100, 240);
  // box(5);

  // translate(0, -5, 0);
  // fill(100, 100, 240);
  // box(5);

  // translate(-5, 0, 0);
  // fill(100, 240, 100);
  // box(5);

  // translate(0, 5, 0);
  // fill(100, 240, 100);
  // box(5);

  // translate(-5, 0, 0);
  // fill(240, 100, 100);
  // box(5);

  // translate(0, -5, 0);
  // fill(240, 100, 100);
  // box(5);
}

function touchStarted(){
  // if (pmouseX <= x+1000 && pmouseX >= x-1000 && pmouseY <= y+1000 && pmouseY <= y-1000){
  //   isPressed += 1;
  //   x = Math.random() * max;
  //   y = Math.random() * max;
  // }
  isPressed += 1;
  x = Math.random() * max;
  y = Math.random() * max;
}
