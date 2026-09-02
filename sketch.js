let startLine = 30;
let finishLine = 430;

let numContenders = 4;

let circX = [startLine, startLine, startLine, startLine];

let speeds = [0, 0, 0, 0];

let colors = [
  [255, 105, 180],
  [128, 0, 128],
  [255, 0, 0],
  [0, 128, 128]
];

let topics = [
  "Processore",
  "Memoria Centrale",
  "Periferiche I/O",
  "File System"
];

let questions = {
  "Processore": [
    {
      domanda: "Che cosa significa CPU?",
      risposta: "Central Processing Unit"
    },
    {
      domanda: "Qual è il compito principale della CPU?",
      risposta: "Eseguire istruzioni"
    },
    {
      domanda: "Quale componente della CPU esegue le operazioni matematiche e logiche?",
      risposta: "ALU"
    }
  ],

  "Memoria Centrale": [
    {
      domanda: "Qual è la memoria principale utilizzata temporaneamente dal computer?",
      risposta: "RAM"
    },
    {
      domanda: "Che cosa significa RAM?",
      risposta: "Random Access Memory"
    },
    {
      domanda: "Quale memoria conserva i dati anche quando il computer viene spento?",
      risposta: "ROM"
    }
  ],

  "Periferiche I/O": [
    {
      domanda: "Quale periferica viene utilizzata per inserire testo nel computer?",
      risposta: "Tastiera"
    },
    {
      domanda: "Il monitor è una periferica di input o output?",
      risposta: "Output"
    },
    {
      domanda: "Quale periferica permette di acquisire immagini dal computer su carta?",
      risposta: "Stampante"
    }
  ],

  "File System": [
    {
      domanda: "Che cosa permette di organizzare i file su un dispositivo di memoria?",
      risposta: "File System"
    },
    {
      domanda: "Come viene normalmente identificato un file tramite nome e tipo?",
      risposta: "Estensione"
    },
    {
      domanda: "Dove vengono organizzati i file all'interno di un sistema operativo?",
      risposta: "Cartelle"
    }
  ]
};

let raceStarted = false;
let gameFinished = false;

let winner = -1;
let currentQuestion;

let answerInput;
let answerButton;

let message = "";

function setup() {
  createCanvas(500, 600);
  frameRate(3);

  let startButton = createButton("START");
  startButton.position(220, 620);
  startButton.mousePressed(startRace);
}

function draw() {
  background(185, 221, 242);

  noStroke();
  fill(0);
  rect(startLine, 0, 5, 500);

  fill(0, 255, 0);
  rect(finishLine, 0, 20, 500);

  if (raceStarted) {
    for (let i = 0; i < numContenders; i++) {
      circX[i] += speeds[i];
    }
  }

  drawContenders();
  drawLegend();

  if (raceStarted) {
    for (let i = 0; i < numContenders; i++) {
      if (circX[i] + 30 >= finishLine) {
        raceStarted = false;
        winner = i;
        chooseQuestion();
        break;
      }
    }
  }

  if (gameFinished) {
    drawQuestion();
  }
}

function drawContenders() {
  let padding = 500 / numContenders;

  for (let i = 0; i < numContenders; i++) {
    let y = (i + 0.5) * padding;

    drawContender(circX[i], y, colors[i]);
  }
}

function drawContender(x, y, color) {
  fill(color);
  stroke(0);
  strokeWeight(1);

  beginShape();

  for (let i = 0; i < 10; i++) {
    let angle = -PI / 2 + i * PI / 5;
    let radius;

    if (i % 2 == 0) {
      radius = 30;
    } else {
      radius = 13;
    }

    let px = x + cos(angle) * radius;
    let py = y + sin(angle) * radius;

    vertex(px, py);
  }

  endShape(CLOSE);
}

function drawLegend() {
  fill(255);
  noStroke();

  rect(30, 510, 440, 75);

  fill(0);
  textSize(14);
  text("LEGENDA DEGLI ARGOMENTI", 40, 530);

  for (let i = 0; i < numContenders; i++) {
    fill(colors[i]);

    beginShape();

    for (let j = 0; j < 10; j++) {
      let angle = -PI / 2 + j * PI / 5;
      let radius;

      if (j % 2 == 0) {
        radius = 10;
      } else {
        radius = 4;
      }

      let px = 70 + i * 105 + cos(angle) * radius;
      let py = 555 + sin(angle) * radius;

      vertex(px, py);
    }

    endShape(CLOSE);

    fill(0);
    textSize(11);
    text(topics[i], 82 + i * 105, 559);
  }
}

function startRace() {
  if (!raceStarted && !gameFinished) {
    for (let i = 0; i < numContenders; i++) {
      circX[i] = startLine;
      speeds[i] = random(8, 20);
    }

    winner = -1;
    message = "";
    raceStarted = true;
  }
}

function chooseQuestion() {
  let topic = topics[winner];

  let topicQuestions = questions[topic];

  let randomIndex = floor(random(topicQuestions.length));

  currentQuestion = topicQuestions[randomIndex];

  gameFinished = true;

  answerInput = createInput();
  answerInput.position(120, 480);
  answerInput.size(250);

  answerButton = createButton("RISPONDI");
  answerButton.position(390, 480);
  answerButton.mousePressed(checkAnswer);
}

function drawQuestion() {
  fill(255, 245);
  rect(50, 100, 400, 300);

  fill(colors[winner]);
  textAlign(CENTER);
  textSize(20);

  text(
    "Ha vinto l'argomento " + topics[winner],
    width / 2,
    140
  );

  fill(0);
  textSize(16);

  text(
    "Argomento: " + topics[winner],
    width / 2,
    180
  );

  text(
    currentQuestion.domanda,
    80,
    230,
    340,
    100
  );

  textSize(14);
  text(message, width / 2, 350);

  textAlign(LEFT);
}

function checkAnswer() {
  let userAnswer = answerInput.value().trim();

  if (
    userAnswer.toLowerCase() ===
    currentQuestion.risposta.toLowerCase()
  ) {
    message = "Risposta corretta! Hai vinto!";
  } else {
    message = "Risposta sbagliata! La risposta era: " +
      currentQuestion.risposta;
  }

  answerInput.remove();
  answerButton.remove();
}
