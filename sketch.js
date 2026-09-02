let startLine = 30;
let finishLine = 430;

let spacing = 20;
let segmentSize = 50;

let numContenders = 4;

function setup() {
  createCanvas(500, 500);
  frameRate(3);
}

function draw() {
  background(89, 70, 100);
  
  noStroke();
  fill(0);
  rect(startLine, 0, 5, height);
  fill(0, 0, 255);
  rect(finishLine, 0, 20, height);
  drawContender(circX, circY-150);
  drawContender(circX, circY);
  drawContender(circX, circY+150);

  circX += spacing;
  if (circX > finishLine) {
    noLoop();
  }
}

function drawContender() {
  let x = circX;

  for (let i = 0; i < segments; i += 1) {
    fill(255, 0, 200);
    stroke(0);
    strokeWeight(1);
    circle(x, y, 50);

    x += spacing;
  }
}
