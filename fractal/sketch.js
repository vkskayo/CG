function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCircle(width / 2, height / 2, 200);
}

function drawCircle(x, y, radius) {
  stroke(0);
  noFill();
  ellipse(x, y, radius, radius);
  if (radius > 2) {
    drawCircle();
    drawCircle(x + radius / 2, y, radius / 2);
    drawCircle(x - radius / 2, y, radius / 2);
  }
}
