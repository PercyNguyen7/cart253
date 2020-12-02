"use strict";
//                                           VARIABLES
let userreject;
let userHeart;
let timer1;
let chain1;
//                                            SFX/ MUSIC
let upSFX;
let downSFX;
let rightSFX;
let leftSFX;
//                                          OSCILLATOR
let oscillator;

//                                               IMAGE
let userrejectImage;
let userHeartImage;
let chain1Image;
//                                               TILES
let tiles = [];
let numTiles = 100;
//                                                STATE
let state = `clickbegin`;
//                                                IMAGE PRELOAD
function preload() {
  // SOUND
  upSFX = loadSound(`assets/sounds/go_up.m4a`);
  downSFX = loadSound(`assets/sounds/head_down.m4a`);
  rightSFX = loadSound(`assets/sounds/go_right.m4a`);
  leftSFX = loadSound(`assets/sounds/go_left.m4a`)
  // IMAGE
  userrejectImage = loadImage(`assets/images/userreject.png`);
  userHeartImage = loadImage(`assets/images/heart.png`);
  chain1Image = loadImage(`assets/images/chain.png`);
}

//                                                     SETUP
function setup() {
  createCanvas(1500, 700);
  userStartAudio()
   oscillator = new p5.Oscillator(880, `sine`);
   oscillator.amp(0.1);
  //                                                 ACCEPT PATH

  timer1 = new Timer1();

  userHeart = new UserHeart(userHeartImage);

  chain1 = new Chain1(chain1Image);
  //                                                 REJECTION PATH
  userreject = new UserReject(userrejectImage);
  //                                                  RED TILES
  //                                                  1st COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 200;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  2nd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 300;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  3rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 400;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  4rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 500;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  5th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 600;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  6th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 700;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  7th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 800;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  8th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 900;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  9th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1000;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  10th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1100;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  11th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1200;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y = y + 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
}
//                                                DRAW
function draw() {
  background(50);
  if (state === `clickbegin`) {
    clickbegin();
  }
  if (state === `title`) {
    title();

  }
  if (state === `instructions`) {
    instructions();
  }
  if (state === `context`) {
    context();
  }
  if (state === `decision`) {
    decision();
  }
  //                                          ACCEPT PATH
  if (state === `acceptp`) {
    acceptp();
  }
  if (state === `acceptintro1`) {
    acceptintro1();
  }
  if (state === `acpminigame1`) {
    acpminigame1();
  }
  if (state === `heartattackEnd`){
    heartattackEnd();
  }
  if (state === `acpminiwin1`){
    acpminiwin1();
  }
  //                                          REJECT PATH
  if (state === `rejectp`) {
    rejectp();
  }
  if (state === `rejectionintro`) {
    rejectionintro();
  }
  if (state === `rejminigame`) {
    rejminigame();
  }
  if (state === `badrejectionEnd`) {
    badrejectionEnd();
  }
  if (state === `goodrejectionEnd`) {
    goodrejectionEnd();
  }
}
//                                                  GAME INTRO
function clickbegin() {
  background(0);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Press any key to begin`, width / 2, height / 2);
  pop();
}
//                                                     TITLE
function title() {
  background(50);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Proposal Day`, width / 2, height / 2);
  pop();
}
//                                                    INTRODUCTION
function instructions() {
  background(100);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Instructions`, width / 2, height / 2);
  textSize(40);
  text(`Tap any key to advance throughout the game`, width / 2, height / 2 + 100);
  pop();
}
//                                                     CONTEXT
function context() {
  background(150);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`context`, width / 2, height / 2);
  pop();
}
//                                                      DECISION
function decision() {
  background(0);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`Decision`, width / 2, height / 2);
  textSize(40);
  text(`A. Accept`, width / 3, 3 * height / 4);
  text(`R. Reject`, 2 * width / 3, 3 * height / 4);
  pop();
}
//                                                   ACCEPT PATH
function acceptp() {
  background(0, 0, 255);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`ACCEPTED`, width / 2, height / 2);
  pop();
}
function acceptintro1(){
  background(69, 29, 87);
  push();
  textSize(64)
  noFill();
  stroke(250, 186, 95);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Contain your heart`, width / 2, height / 2 - 100);
  textSize(70);
  text(`Don't break the chains`, width / 2, height / 2 - 20);
  textSize(50);
  text(`Press Spacebar to BEGIN`, width / 2, height / 2 + 100);
  textSize(40);
  text(`Control with Arrow Keys`, width / 2, height / 2 + 150);
  pop();
}

function acpminigame1(){
  background(160,1,7);
  //                                         TIMER
  timer1.display();
  timer1.ballsmove();
  if (timer1.counter === 5 || timer1.counter >=7 && timer1.counter <=9 ){
    background(0);
    push();
    fill(255);
    text(`BLACK OUT`, width / 2, height / 2);
    pop();
  }

//                                        USER HEART
  userHeart.display();
  userHeart.move();
  userHeart.touchchain();


  //                                        Chain1
  chain1.display();

}
//                                                     HEART ATTACK ENDING
function heartattackEnd(){
  background(100);
  push();
  noFill();
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`How do you mend a heart attack`, width/2, height/2);
  pop();
}

function acpminiwin1(){
  background(100);
  push();
  noFill(210, 10,30);
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`You survived the first trial of love!`, width/2, height/2);
  pop();
}
//                                                    REJECTION PATH
function rejectp() {
  background(255, 0, 0);
  push();
  textSize(64);
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(100);
  text(`REJECTED`, width / 2, height / 2);
  pop();
}

function rejectionintro() {
  background(69, 29, 87);
  push();
  textSize(64)
  noFill();
  stroke(250, 186, 95);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`Go through`, width / 2, height / 2 - 100);
  textSize(70);
  text(`Find the secret path`, width / 2, height / 2 - 20);
  textSize(50);
  text(`Tap Spacebar to BEGIN`, width / 2, height / 2 + 100);
  textSize(40);
  text(`Control by tapping Arrow Keys`, width / 2, height / 2 + 150);
  pop();
}
//                                                   rejminigame STATE
function rejminigame() {
  //                                                   TILE FUNCTIONS
  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
    tile.display();
    tile.colorchange();
  }
  //                                                USERREJECT FUNCTIONS
  userreject.move();
  userreject.display();
  userreject.sfxguide();
  userreject.badpath();
  userreject.goodpath();

  //                                                DESTINATION RECTANGLES
  rect(1300, 0, 100, 700);
}

//                                                   TWO REJECTIOn ENDING STATES
//                                                   BAD REJECTION ENDING
function badrejectionEnd() {
  background(255, 40, 40);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(80);
  text(`He never found love again`, width / 2, height / 2);
  pop();
}
//                                                    GOOD REJECTION ENDING
function goodrejectionEnd() {
  background(125);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(`A painful truth`, width / 2, height / 2);
  text(`But a well handled one`, width / 2, 440);
  pop();
}


//                                                     KEYPRESSED FUNCTION
function keyPressed() {
  if (state === `clickbegin`) {
    state = `title`;
  } else if (state === `title`) {
    state = `instructions`;
  } else if (state === `instructions`) {
    state = `context`;
  } else if (state === `context`) {
    state = `decision`;
  }
//                                                ACCEPT PATH
  else if (state === `decision` && keyCode === 65) {
    state = `acceptp`;
  } else if (state === `acceptp`) {
    state = `acceptintro1`;
  } else if (state ===`acceptintro1`&& keyCode === 32) {
    state = `acpminigame1`
  }

//                                                 REJECT PATH
  else if (state === `decision` && keyCode === 82) {
    state = `rejectp`;
  } else if (state === `rejectp`) {
    state = `rejectionintro`;
  } else if (state === `rejectionintro` && keyCode === 32) {
      state = `rejminigame`;
  }
}
