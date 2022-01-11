function setup() {
  createARCanvas();
}

let rot = 0;
let rotSpeed = 0.1;
let location = (0,0,0);
value = 150;

function draw() {
  rot += rotSpeed;
  // rotateY(rot);

  // translate(location);
  fill(100, 100, 240);
  box(5);

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
  location = (0, -5, -5);
  redraw();
}
