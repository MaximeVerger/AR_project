function setup() {
  createARCanvas();
}

let rot = 0;
let rotSpeed = 0.1;

function draw() {
  rot += rotSpeed;
  // rotateY(rot);
  fill(100, 240, 100);

  box(5);

  translate(-5, 0, 0);
  fill(240, 100, 100);
  box(5);

  translate(10, 0, 0);
  fill(100, 100, 240);
  box(5);

  translate(0, -5, 0);
  fill(100, 100, 240);
  box(5);

  translate(0, -10, 0);
  fill(100, 100, 240);
  box(5);
}
