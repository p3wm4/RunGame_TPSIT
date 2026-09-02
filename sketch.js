let startLine = 30;
let finishLine = 430;

let spacing = 20;
let numContenders = 4;

let circX = startLine;
let colors = [
  [255, 105, 180],     // Pink
  [128, 0, 128],     // Purple
  [255, 0, 0],   // Red
  [0, 128, 128]    // Teal
];

let raceStarted = false;

function setup() {
  createCanvas(500, 500);
  frameRate(3);

  let startButton = createButton("START");
  startButton.position(220, 520);
  startButton.mousePressed(startRace);
}

function draw() {
  background(128, 128, 128);

  noStroke();
  fill(0);
  rect(startLine, 0, 5, height);

  fill(0, 255, 0);
  rect(finishLine, 0, 20, height);

  if (raceStarted) {
    circX += spacing;
  }

  drawContenders();

  if (circX > finishLine) {
    raceStarted = false;
  }
}

function drawContenders() {
  let padding = height / numContenders;

  for (let i = 0; i < numContenders; i += 1) {
    let y = (i + 0.5) * padding;

    drawContender(circX, y, colors[i]);
  }
}

function drawContender(x, y, color) {
  fill(color);
  stroke(0);
  strokeWeight(1);

  circle(x, y, 50);
}

function startRace() {
  raceStarted = true;
}
