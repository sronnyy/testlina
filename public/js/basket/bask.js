let fixedWidth = 2795;
let fixedHeight = 5010;

const scoreContainer = document.getElementById("score-container");
const hoopM = document.getElementById("hoop");
const hoopGap = document.getElementById("gap-hoop");
const tapGap = document.getElementById("tap");

if (scoreContainer) {
  scoreContainer.style.top = "52px";
}

if (hoopM) {
  hoopM.style.marginTop = "30px";
}

if (hoopGap) {
  hoopGap.style.gap = "80px";
}

if (tapGap) {
  tapGap.style.marginBottom = "-12px";
}

if (window.innerHeight < 1000) {
  fixedHeight = 6200;

  spawnPositions = [
    { x: 385, y: 5150 },
    { x: 2300, y: 5150 },
    { x: 800, y: 5150 },
  ];

  scoreContainer.style.top = "52px";
  hoopM.style.marginTop = "30px";
  hoopGap.style.gap = "80px";

  hoopY = 720;
  rightRimY = 1605;
  leftRimY = 1605;
  scoreAreaYY = 1560;
  ballV = -14450;
  ballG = 23500;
}



if (window.innerHeight < 915) {
  fixedHeight = 6050;
  spawnPositions = [
    { x: 385, y: 5250 },
    { x: 2300, y: 5250 }, // Nova posição com o mesmo y
    { x: 800, y: 5250 }, // Outra posição com o mesmo y
  ];
  hoopY = 720;
  rightRimY = 1583;
  leftRimY = 1583;
  scoreAreaYY = 1570;
  ballV = -15000;
  ballG = 24300;
}

if (window.innerHeight < 900) {
  hoopGap.style.gap = "60px";
  fixedHeight = 5800;
  spawnPositions = [
    { x: 385, y: 4800 },
    { x: 2300, y: 4800 }, // Nova posição com o mesmo y
    { x: 800, y: 4800 }, // Outra posição com o mesmo y
  ];
  hoopY = 720;
  rightRimY = 1580;
  leftRimY = 1580;
  scoreAreaYY = 1570;
  ballV = -15000;
  ballG = 26000;
}

if (window.innerHeight < 870) {
  hoopGap.style.gap = "40px";
  fixedHeight = 5800;
  spawnPositions = [
    { x: 385, y: 4800 },
    { x: 2300, y: 4800 }, // Nova posição com o mesmo y
    { x: 800, y: 4800 }, // Outra posição com o mesmo y
  ];
  hoopY = 690;
  rightRimY = 1565;
  leftRimY = 1565;
  scoreAreaYY = 1540;
  ballV = -14650;
  ballG = 26300;
}

if (window.innerHeight < 850) {
  hoopGap.style.gap = "40px";
  fixedHeight = 5800;
  spawnPositions = [
    { x: 385, y: 4800 },
    { x: 2300, y: 4800 }, // Nova posição com o mesmo y
    { x: 800, y: 4800 }, // Outra posição com o mesmo y
  ];
  hoopY = 690;
  rightRimY = 1565;
  leftRimY = 1565;
  scoreAreaYY = 1540;
  ballV = -14650;
  ballG = 26300;
}

if (window.innerWidth < 400) {
  fixedHeight = 6200;
}

if (window.innerHeight < 820) {
  fixedHeight = 5500;
  spawnPositions = [
    { x: 385, y: 4600 },
    { x: 2300, y: 4600 },
    { x: 800, y: 4600 },
  ];
  hoopY = 690;
  rightRimY = 1565;
  leftRimY = 1565;
  scoreAreaYY = 1540;
  ballV = -14650;
  ballG = 26300;
}

if (window.innerHeight < 820 && window.innerWidth < 392) {
  tapGap.style.marginBottom = "-12px";
  fixedHeight = 6100;
  spawnPositions = [
    { x: 385, y: 4600 },
    { x: 2300, y: 4600 }, // Nova posição com o mesmo y
    { x: 800, y: 4600 }, // Outra posição com o mesmo y
  ];
  hoopY = 690;
  rightRimY = 1565;
  leftRimY = 1565;
  scoreAreaYY = 1540;
  ballV = -14650;
  ballG = 26300;
}

if (window.innerHeight < 780) {
  fixedHeight = 5200;
  hoopGap.style.gap = "10px";
  spawnPositions = [
    { x: 385, y: 4450 },
    { x: 2300, y: 4450 }, // Nova posição com o mesmo y
    { x: 800, y: 4450 }, // Outra posição com o mesmo y
  ];
  hoopY = 640;
  rightRimY = 1510;
  leftRimY = 1510;
  scoreAreaYY = 1480;
  ballV = -14950;
  ballG = 30000;
}

if (window.innerHeight < 750) {
  fixedHeight = 4900;
  hoopGap.style.gap = "10px";
  spawnPositions = [
    { x: 385, y: 4150 },
    { x: 2300, y: 4150 }, // Nova posição com o mesmo y
    { x: 800, y: 4150 }, // Outra posição com o mesmo y
  ];
  hoopY = 640;
  rightRimY = 1510;
  leftRimY = 1510;
  scoreAreaYY = 1480;
  ballV = -14650;
  ballG = 32300;

  scoreContainer.style.top = "48px"; // Nova posição em pixels
}

if (window.innerHeight < 720) {
  fixedHeight = 4600;
  hoopGap.style.gap = "0px";
  tapGap.style.marginBottom = "-14px";

  spawnPositions = [
    { x: 385, y: 3900 },
    { x: 2300, y: 3900 }, // Nova posição com o mesmo y
    { x: 800, y: 3900 }, // Outra posição com o mesmo y
  ];
  hoopY = 640;
  rightRimY = 1500;
  leftRimY = 1500;
  scoreAreaYY = 1480;
  ballV = -14650;
  ballG = 34300;
}

if (window.innerHeight < 714) {
  fixedHeight = 4800;
  hoopGap.style.gap = "0px";
  tapGap.style.marginBottom = "-14px";

  spawnPositions = [
    { x: 385, y: 3900 },
    { x: 2300, y: 3900 }, // Nova posição com o mesmo y
    { x: 800, y: 3900 }, // Outra posição com o mesmo y
  ];
  hoopY = 640;
  rightRimY = 1500;
  leftRimY = 1500;
  scoreAreaYY = 1480;
  ballV = -14650;
  ballG = 34300;
}

if (window.innerHeight < 710) {
  fixedHeight = 4700;
  hoopGap.style.gap = "-8px";
  tapGap.style.marginBottom = "-16px";

  spawnPositions = [
    { x: 385, y: 3900 },
    { x: 2300, y: 3900 }, // Nova posição com o mesmo y
    { x: 800, y: 3900 }, // Outra posição com o mesmo y
  ];
  hoopY = 640;
  rightRimY = 1500;
  leftRimY = 1500;
  scoreAreaYY = 1480;
  ballV = -14650;
  ballG = 34300;
}

if (window.innerHeight < 710) {
  fixedHeight = 4700;
  hoopGap.style.gap = "-4px";
  tapGap.style.marginBottom = "-16px";

  spawnPositions = [
    { x: 385, y: 3900 },
    { x: 2300, y: 3900 }, // Nova posição com o mesmo y
    { x: 800, y: 3900 }, // Outra posição com o mesmo y
  ];
  hoopY = 640;
  rightRimY = 1500;
  leftRimY = 1500;
  scoreAreaYY = 1480;
  ballV = -14650;
  ballG = 34300;
}

var lives = 2;
var background;

var game = new Phaser.Game(fixedWidth, fixedHeight, Phaser.CANVAS, "", {
  preload: preload,
  create: create,
  update: update,
  resolution: window.devicePixelRatio,
  transparent: true, // Habilita o fundo transparente
});

var hoop, leftRim, rightRim, ball, frontRim;
var currentScore = 0,
  highScore = 0;
var currentScoreText, highScoreText, currentBestText;
var scoreSound, backboardSound, whooshSound, failSound, spawnSound;
var emoji, collisionGroup;

function preload() {
  game.load.image("background", "images/assets/images/imagnew.jpg");
  game.load.image("ball", "images/assets/images/new.png");
  game.load.image("hoop", "images/assets/images/hoop.png");
  game.load.image("side_rim", "images/assets/images/side_rim.png");
  game.load.image("front_rim", "images/assets/images/front_rim.png");
  loadEmojis();
  loadSounds();
}

function loadEmojis() {
  for (let i = 0; i <= 4; i++) {
    game.load.image(`win${i}`, `images/assets/images/win${i}.png`);
    game.load.image(`lose${i}`, `images/assets/images/lose${i}.png`);
  }
}

function loadSounds() {
  scoreSound = game.load.audio("score", "images/assets/audio/score.wav");
  backboardSound = game.load.audio(
    "backboard",
    "images/assets/audio/backboard.wav"
  );
  whooshSound = game.load.audio("whoosh", "images/assets/audio/whoosh.wav");
  failSound = game.load.audio("fail", "images/assets/audio/fail.wav");
  spawnSound = game.load.audio("spawn", "images/assets/audio/spawn.wav");
}

function create() {
  background = game.add.sprite(0, 0, "background");
  background.width = game.world.width;
  background.height = game.world.height;
  game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;

  // game.scale.setUserScale(scaleFactor, scaleFactor);
  // game.renderer.renderSession.roundPixels = true;

  setupPhysics();
  setupSounds();
  setupText();
  setupHoop();
  createBall();
  setupInput();
  updateLivesText();
}

function setupPhysics() {
  game.physics.startSystem(Phaser.Physics.P2JS);
  game.physics.p2.setImpactEvents(true);
  game.physics.p2.restitution = 0.63;
  game.physics.p2.gravity.y = 0;
  collisionGroup = game.physics.p2.createCollisionGroup();
}

function setupSounds() {
  scoreSound = game.add.audio("score");
  backboardSound = game.add.audio("backboard", 0.5);
  whooshSound = game.add.audio("whoosh");
  failSound = game.add.audio("fail", 0.1);
  spawnSound = game.add.audio("spawn");
}

function updateLivesText() {
  // Obtém o elemento de vidas
  const livesElement = document.getElementById("lifes");
  if (livesElement) {
    livesElement.innerText = `${lives}`;
  }
}

var livesText;

function setupText() {
  currentScoreText = createText(197, 320, "60px", "#ffffff");
  currentBestText = createText(120, 90, "30px", "#ffffff");
  highScoreText = createText(387, 312, "1px", "#00e6e6");
}

function createText(x, y, fontSize, color) {
  return game.add.text(x, y, "", {
    font: "Arial",
    fontSize: fontSize,
    fill: color,
    align: "center",
  });
}

function setupHoop() {
  hoop = game.add.sprite(410, hoopY, "hoop");
  hoop.scale.setTo(1.8, 1.8);

  leftRim = createRim(875, leftRimY);
  leftRim.scale.setTo(10.2, 10.0);
  leftRim.tint = 0xffffff;

  rightRim = createRim(1896, rightRimY);
  rightRim.scale.setTo(10.2, 10.0);
  rightRim.tint = 0xffffff;
}

function createRim(x, y) {
  let rim = game.add.sprite(x, y, "side_rim");
  game.physics.p2.enable(rim, false);
  rim.body.setCircle(17.5);
  rim.body.static = true;
  rim.body.setCollisionGroup(collisionGroup);
  rim.body.collides([collisionGroup]);
  return rim;
}

function createBall() {
  const randomPosition =
    spawnPositions[Math.floor(Math.random() * spawnPositions.length)];

  ball = game.add.sprite(randomPosition.x, randomPosition.y, "ball");
  ball.scale.setTo(4.5, 4.5);
  game.physics.p2.enable(ball, false);
  ball.body.setCircle(333);
  ball.launched = false;
  ball.isBelowHoop = false;

  if (currentScore >= 20 && !ball.launched) {
    startBallMovement();
  }
}

let tween = null;
let startSideLeft = true;

function startBallMovement() {
  const leftX = 500;
  const rightX = 2400;
  const startX = startSideLeft ? leftX : rightX;
  const targetX = startSideLeft ? rightX : leftX;

  startSideLeft = !startSideLeft;

  if (tween) {
    tween.stop();
    tween = null;
  }

  ball.body.x = startX;

  tween = game.add
    .tween(ball.body)
    .to({ x: targetX }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);

  tween.onLoop.add(() => {
    console.log(
      `Movimento contínuo iniciado. Posição inicial: ${startX}, destino: ${targetX}`
    );
  });
}

function setupInput() {
  game.input.onDown.add(onPointerDown, this);
  game.input.onUp.add(onPointerUp, this);
}

function displayInstructions() {
  let instructions = document.createElement("span");
  instructions.innerHTML = "";
  document.body.appendChild(instructions);
}

function update() {
  if (ball && ball.body.velocity.y > 0) {
    checkCollisionWithRim();
    checkScore();
  }
  resetBallIfOutOfBounds();
}

function checkCollisionWithRim() {
  if (frontRim) {
    frontRim.destroy();
  }

  frontRim = game.add.sprite(148, 182, "front_rim");
  frontRim.width = 0;
  frontRim.height = 0;

  ball.body.collides([collisionGroup], playBackboardSound, this);
}

function playBackboardSound() {
  backboardSound.play();
}

// function checkScore() {
//   const scoreAreaXStart = 870;
//   const scoreAreaXEnd = 1925;
//   const scoreAreaY = scoreAreaYY;

//   if (ball.body.y >= scoreAreaY && !ball.isBelowHoop) {
//     ball.isBelowHoop = true;
//     ball.body.collideWorldBounds = false;
//     let scored = ball.body.x > scoreAreaXStart && ball.body.x < scoreAreaXEnd;
//     updateScore(scored);
//     displayEmoji(scored ? "win" : "lose");
//   }
// }

function checkScore() {
  const scoreAreaXStart = 870;
  const scoreAreaXEnd = 1925;
  const scoreAreaY = scoreAreaYY;
  const scoreAreaWidth = scoreAreaXEnd - scoreAreaXStart;

  let scoreArea = game.add.graphics(0, 0);
  scoreArea.beginFill(0xffffff, 0.2);
  scoreArea.drawRect(scoreAreaXStart, scoreAreaY, scoreAreaWidth, 75);
  scoreArea.endFill();

  game.time.events.add(Phaser.Timer.SECOND * 0.5, () => {
    scoreArea.destroy();
  });

  if (ball.body.y >= scoreAreaY && !ball.isBelowHoop) {
    ball.isBelowHoop = true;
    ball.body.collideWorldBounds = false;
    let scored = ball.body.x > scoreAreaXStart && ball.body.x < scoreAreaXEnd;
    updateScore(scored);
    displayEmoji(scored ? "win" : "lose");
  }
}

function updateScore(isWin) {
  if (isWin) {
    currentScore += 2;

    scoreSound.play();
  } else {
    failSound.play();
    highScore = Math.max(currentScore, highScore);
    resetScore();
  }
  updateScoreText();
}

function resetScore() {
  lives--;

  updateLivesText();

  if (lives <= 0) {
    const gameover = document.getElementById("game-over");
    gameover.classList.remove("hidden");

    const scoreGameElement = document.getElementById("score-game");

    window.dispatchEvent(
      new CustomEvent("game-update", {
        detail: {
          action: "game-end",
          payload: {
            reward: currentScore,
          },
        },
      })
    );

    if (scoreGameElement) {
      scoreGameElement.innerText = currentScore;
    }
    return;
  }

  updateScoreText();
}

function updateScoreText() {
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = currentScore;
  }
}

function displayEmoji(type) {
  let rand = Math.floor(Math.random() * 5);
  emoji = game.add.sprite(1220, 750, `${type}${rand}`);
  emoji.scale.setTo(2, 2);
  game.add
    .tween(emoji)
    .from({ y: 150, alpha: 0 }, 500, Phaser.Easing.Elastic.Out, true)
    .onComplete.add(fadeOutEmoji, this);
}

function fadeOutEmoji() {
  game.add
    .tween(emoji)
    .to({ y: 50, alpha: 0 }, 600, Phaser.Easing.Elastic.In, true)
    .onComplete.add(() => emoji.kill(), this);
}

function resetBallIfOutOfBounds() {
  if (ball && ball.body.y > 8550) {
    game.physics.p2.gravity.y = 0;
    ball.kill();
    createBall();
  }
}

var isDragging = false,
  startLocation,
  endLocation,
  locationInterval;

function onPointerUp(pointer) {
  if (isDragging) {
    clearInterval(locationInterval);
    isDragging = false;
    endLocation = [pointer.x, pointer.y];

    // Se a bola não foi lançada, interrompe o movimento lateral
    if (tween && ball.launched === false) {
      tween.stop(); // Para o movimento lateral
      tween = null; // Limpa a referência do tween
    }

    // Lança a bola se o usuário arrastar para cima
    if (endLocation[1] < startLocation[1]) {
      launchBall(calculateTrajectory());
    }
  }
}

function calculateTrajectory() {
  let slope = [
    endLocation[0] - startLocation[0],
    endLocation[1] - startLocation[1],
  ];
  return (-2300 * slope[0]) / slope[1];
}

function launchBall(xTrajectory) {
  if (!ball.launched) {
    ball.launched = true;
    prepareBallForLaunch();
    ball.body.velocity.x = xTrajectory;
    ball.body.velocity.y = ballV;
    ball.body.rotateRight(xTrajectory / 3);
    whooshSound.play();
  }
}

function prepareBallForLaunch() {
  ball.launched = true;
  ball.body.setCircle(300);
  ball.body.setCollisionGroup(collisionGroup);
  currentBestText.text = "";
  highScoreText.text = "";
  game.physics.p2.gravity.y = ballG;
  game.add
    .tween(ball.scale)
    .to({ x: 3, y: 3 }, 1000, Phaser.Easing.Linear.None, true);
}

function onPointerDown(pointer) {
  if (game.physics.p2.hitTest(pointer.position, [ball.body]).length) {
    startLocation = [pointer.x, pointer.y];
    isDragging = true;
    locationInterval = setInterval(
      () => (startLocation = [pointer.x, pointer.y]),
      200
    );
  }
}

function setupInput() {
  game.input.onDown.add(onPointerDown, this);
  game.input.onUp.add(onPointerUp, this);

  const replayButton = document.getElementById("replay");
  if (replayButton) {
    replayButton.addEventListener("click", () => {
      restartGame();
    });
  }

  const playButton = document.getElementById("play");
  if (playButton) {
    playButton.addEventListener("click", () => {
      // Log para indicar que o botão "Play" foi pressionado
      console.log(
        "Botão 'Play' pressionado. Tornando os elementos visíveis..."
      );
    });
  }
}

function restartGame() {
  lives = 2;
  currentScore = 0; // Zera o score
  ball.launched = false; // Reseta o estado de lançamento da bola

  // Para o movimento lateral, caso esteja ativo
  if (tween) {
    tween.stop(); // Para o tween ativo
    tween = null; // Limpa a referência ao tween
  }
  updateLivesText();
  updateScoreText();
}
