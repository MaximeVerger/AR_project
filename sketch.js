function setup() {
  createARCanvas();
}

let rot = 0;
let rotSpeed = 0.1;
value = color(100, 240, 100)

function draw() {
  rot += rotSpeed;
  // rotateY(rot);
  fill(value);

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

function mouseClicked(){
  console.log("yes tu click")
  if (value === color(100,240,100)){
    value = color(255,255,255)
  } 
  else {
    value = color(100,240,100)
  }
}
