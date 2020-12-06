"use strict";
//                                           VARIABLES
//FONTS
let onyxFont;
let tradegothicFont;

let magicWord = `yes i will!`
let riddleText = `Will you marry me?`
let currentInput = ``;
let visible = true;
let fillbg = {
  r: 176,
  g: 31,
  b: 44,
}
let userreject;
let userHeart;
let userHeart2;
let timer1;
let chain1;
let memos = [];
let numMemos = 120;
let timer2;

//                                            SFX/ MUSIC
let menumusic;
let acceptmusic;
let rejectmusic;

let fastforwardSFX;
let stopSFX;
let loseSFX;
let winSFX;
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
  //FONTS
  onyxFont = loadFont(`assets/fonts/ONYX.TTF`);
  tradegothicFont = loadFont(`assets/fonts/Trade Gothic LT Condensed No. 18.ttf`);

  // SOUND
  menumusic = loadSound(`assets/sounds/menu.mp3`);
  acceptmusic = loadSound(`assets/sounds/POSING.mp3`);
  rejectmusic = loadSound(`assets/sounds/HTRJ.mp3`);

  fastforwardSFX = loadSound(`assets/sounds/fastforward.mp3`);
  stopSFX = loadSound(`assets/sounds/stopSFX.mp3`);
  winSFX = loadSound(`assets/sounds/winSFX.mp3`);
  loseSFX = loadSound(`assets/sounds/loseSFX.mp3`);
  upSFX = loadSound(`assets/sounds/go_up.m4a`);
  downSFX = loadSound(`assets/sounds/head_down.m4a`);
  rightSFX = loadSound(`assets/sounds/go_right.m4a`);
  leftSFX = loadSound(`assets/sounds/go_left.m4a`);
  // IMAGE
  userrejectImage = loadImage(`assets/images/userreject.png`);
  userHeartImage = loadImage(`assets/images/heart.png`);
  chain1Image = loadImage(`assets/images/chain.png`);
}

//                                                     SETUP
function setup() {
  createCanvas(1500, 700);
  textAlign(CENTER, CENTER);
  textFont(tradegothicFont);
  //                                                  AUDIO
  userStartAudio()
  oscillator = new p5.Oscillator(880, `sine`);
  // fastforwardSFX.amp(0.5);
  winSFX.amp(0.4);
  rightSFX.amp(4);
  leftSFX.amp(5.5);
  downSFX.amp(4.5);
  upSFX.amp(3.5);
  oscillator.amp(0.3);

  menumusic.amp(0.4);
  acceptmusic.amp(0.4);
  rejectmusic.amp(0.25);
  //                                                 ACCEPT PATH
  userHeart2 = new UserHeart2(userHeartImage);

  timer1 = new Timer1();

  userHeart = new UserHeart(userHeartImage);

  chain1 = new Chain1(chain1Image);

  for (let i = 0; i < numMemos; i++) {
    let x = random(50, width - 50);
    let y = random(50, height - 50);
    let memo = new Memo(x, y);
    memos.push(memo);

  }

  // BLINK AT minigame 2 accept route
  setInterval(blink, 1500);
  timer2 = new Timer2();
  //                                                 REJECTION PATH
  userreject = new UserReject(userrejectImage);
  //                                                  PURPLE? TILES
  //                                                  1st COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 200;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  2nd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 300;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  3rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 400;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  4rd COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 500;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  5th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 600;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  6th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 700;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  7th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 800;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  8th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 900;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  9th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1000;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100;

      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  10th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1100;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100
      let tile = new Tile(x, y, color);
      tiles.push(tile);
    }
  }
  //                                                  11th COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 1200;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y += 100
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
  if (state === `acpintro1`) {
    acpintro1();
  }
  if (state === `acpminigame1`) {
    acpminigame1();
  }
  if (state === `heartattackEnd`) {
    heartattackEnd();
  }
  if (state === `acpminiwin1`) {
    acpminiwin1();
  }
  if (state === `acpintro2`) {
    acpintro2();
  }
  if (state === `acpminigame2`) {
    acpminigame2();
  }
  if (state === `panicEnd`) {
    panicEnd();
  }
  if (state === `acpminiwin2`) {
    acpminiwin2();
  }
  if (state === `acpintro3`) {
    acpintro3();
  }
  if (state === `acpminigame3`) {
    acpminigame3();
  }
  if (state === `trueEnd`) {
    trueEnd();
  }
  if (state === `heleftEnd`) {
    heleftEnd();
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
  noFill();
  textSize(50);
  strokeWeight(1);
  stroke(254,204,23);
  text(`Press Spacebar to navigate through the game`, width / 2, height / 2);
  pop();
}
//                                                     TITLE
function title() {
  background(6,53,110);
  push();
  textFont(onyxFont);
  strokeWeight(2);
  stroke(0);
  fill(254,204,23);
  textSize(120);
  text(`PROPOSAL DAY 2`, width / 2, height / 2);
  pop();
}
//                                                    INTRODUCTION
function instructions() {
  background(37,25,9);

  push();
  strokeWeight(3);
  stroke(0);
  fill(246,199,93);
  textSize(120);
  textFont(onyxFont);
  text(`Instructions`, width / 2, height/2 - 100);
  textFont(tradegothicFont);
  textSize(60);
  text(`Control with Keyboard`, width / 2, height / 2 +50);
  textSize(50);
  text(`Press Space on Endings to play again`, width/2, height / 2 + 120)
  text(`Stay on Instructions to enjoy the lovely background lounge jazz`, width/2, height / 2 + 190)
  pop();
}
//                                                     CONTEXT
function context() {
  background(6,53,110);
  push();
  strokeWeight(2);
  stroke(0);
  fill(255);
  textSize(50);
  text(`You watch as the man of your life kneels down`, width / 2, 50);
  text(`and propose...`, width / 2, 100);
  pop();
}
//                                                      DECISION
function decision() {
  background(0);
  push();
  stroke(255);
  noFill();
  strokeWeight(2);
  textSize(100);
  text(`So what is it going to be, chief?`, width / 2, height / 2 - 100);
  textFont(tradegothicFont);
  textSize(120);
  stroke(180,1,7);
  text(`A. Accept!`, width / 4,  2*height / 3 );
  stroke(36,69,150);
  // fill(36,69,150);
  textSize(120);
  text(`R. Reject...`, 3 * width / 4, 2* height / 3);
  pop();
}
//                                                   ACCEPT PATH
function acceptp() {
  background(6,53,110);
  push();
  strokeWeight(3);
  stroke(68,57,17);
  textSize(64);
  fill(250,186,95);
  textSize(50);
  text(`...but of course`, width/2, height/ 2 -200);
  textSize(100);
  text(`BUT OF COURSEEEEE!!!!`, width / 2, height / 2 - 100);
  textSize(50);
  text(`...you thought inside your head`, width / 2, height / 2 + 50);
  textSize(30);
  text(`But the words won't come out...`, width / 2, height / 2 + 120);
  textSize(50);
  text(`You feel your heart beats faster by the second...`, width / 2, height / 2 + 190);
  pop();
}

function acpintro1() {
  background(189,29,29);
  push();
  stroke(0);
  strokeWeight(3);
  fill(255,192,183);
  textSize(130);
  textFont(onyxFont);
  text(`CONTAIN YOUR HEART`, width / 2, height / 2 - 120);
  textSize(90);
  text(`Don't break the chains`, width / 2, height / 2 - 20);
  textFont(tradegothicFont);
  textSize(50);
  text(`Control with Arrow Keys`, width / 2, height / 2 + 100);
  text(`Press Spacebar to BEGIN`, width / 2, height / 2 + 150);
  pop();
}

function acpminigame1() {
  background(160, 1, 7);
  //                                         TIMER
  timer1.blackout();
  timer1.ballsmove();
  timer1.display();

  //                                        USER HEART
  userHeart.display();
  userHeart.move();
  userHeart.touchchain();

  //                                        Chain1
  chain1.display();
}
//                                                     HEART ATTACK ENDING
function heartattackEnd() {
  background(0);
  push();
  fill(166,1,7);
  textSize(50);
  text(`You DIED`, width / 2, height / 2 - 80);
  text(`...from a heart attack`, width / 2, height / 2);
  textFont(onyxFont);
  textSize(100);
  text(`THE END`, width / 2, height / 2 + 200);
  pop();
}

function acpminiwin1() {
  background(255,192,183);
  push();
  stroke(255);
  strokeWeight(3);
  fill(189,29,29);
  textSize(40);
  text(`You contained your emotions and survived the first trial of love!`, width / 2, height/2 - 80);
  textSize(80);
  text(`NOW FACE THE SECOND`, width / 2, height / 2);
  pop();
}

function acpintro2() {
  background(0,70,124);
  push();
  stroke(0);
  strokeWeight(3);
  fill(247,193,44);
  textSize(130);
  textFont(onyxFont);
  text(`COLLECT YOUR THOUGHTS`, width / 2, height / 2 - 120);
  textSize(90);
  text(`Before they drive you wild`, width / 2, height / 2 - 20);
  textFont(tradegothicFont);
  textSize(50);
  text(`Control with Arrow Keys`, width / 2, height / 2 + 100);
  text(`Switch play mode with A & S `, width / 2, height / 2 + 150);
  text(`Press Spacebar to BEGIN`, width / 2, height / 2 + 200);
  pop();
}

function acpminigame2() {
  background(fillbg.r, fillbg.g, fillbg.b);

  blinkog();

  //  memos
  for (let i = 0; i < memos.length; i++) {
    let memo = memos[i];

    if (memo.active) {
      if (memo.tstop === true) {
        fillbg = {
          r: 0,
          g: 0,
          b: 0
        }
      } else {
        fillbg = {
          r: 4,
          g: 67,
          b: 120,
        }
      }
      memo.move();
      memo.bounce();
      memo.display();
      let d = dist(memo.x, memo.y, userHeart2.x, userHeart2.y);
      if (d < memo.size / 2 + userHeart2.size / 2) {
        memos.splice(i, 1);
        break;
      }
    }
  }

  //                                                  WIN GAME CONDITION
  if (memos.length <= 0) {
    state = `acpminiwin2`
    winSFX.play();
    if (acceptmusic.rate(0.5)){
      acceptmusic.rate(1);
    }
  }
  //                                               HEART AND PURSUER
  userHeart2.display();
  userHeart2.move();
  userHeart2.displaypursuer();
  userHeart2.movepursuer();
  userHeart2.caught();
}

//                          BLINK FUNCTIONS
function blinkog() {
  push();

  if (visible && userHeart2.size2 ===450) {
    fill(180,3,8);
    rectMode(CENTER);
    rect(width / 2 - 150, height / 2, 200, 500);
    rect(width / 2 + 150, height / 2, 200, 500);
  }
  pop();
}

function blink() {
  visible = !visible;
}

function panicEnd() {
  background(0);
  push();
  fill(166,1,7);
  textSize(50);
  text(`Flustered with thoughts and emotions,`, width / 2, height / 2 - 100);
  text(`You blurted out NO and ran away in embarassment`, width / 2, height / 2);
  textFont(onyxFont);
  textSize(100);
  text(`THE END`, width / 2, height / 2 + 200);
  pop();
}

function acpminiwin2() {
  background(247,193,44);
  push();
  stroke(255);
  strokeWeight(3);
  fill(3,82,144);
  textSize(40);
  text(`You gathered your thoughts!`, width / 2, height / 2 - 100);
  textSize(80);
  text(`But one obstacle remains...`, width / 2, height / 2 );
  pop();
}

function acpintro3() {
  background(16,27,44);
  push();
  stroke(0);
  strokeWeight(2);
  fill(240,189,40);
  textFont(onyxFont);
  textSize(170);
  text(`SAY THE PHRASE!`, width / 2, height / 2 - 150);
  textSize(130);
  text(`SAY IT DAMN YOU!`, width / 2, height / 2 - 20);
  textFont(tradegothicFont);
  textSize(50);
  text(`Use Keyboard to type`, width / 2, height / 2 + 100);
  text(`Use BACKSPACE to delete`, width / 2, height / 2 + 150);
  text(`Press BACKSPACE to BEGIN`, width / 2, height / 2 + 200);
  pop();
}

function acpminigame3() {
  // Check if they've got it right yet
  let correct = checkInput();
  background(0);
  if (correct) {
    state = `trueEnd`;
    winSFX.play();
  }
  push();
  // stroke(255);
  // strokeWeight(2)
  fill(225,170,18);
  textSize(130);
  textFont(onyxFont);
  // Display the riddle
  text(riddleText, width / 2, height / 3);
  // Display the current input from the user
  text(currentInput, width / 2, 2 * height / 3);
  pop();

  timer2.display();
  timer2.move();
  timer2.touchbottom();
}

function checkInput() {
  // First convert the input to lower case so we can
  // ignore any capitalization stuff
  let lowerCaseInput = currentInput.toLowerCase();
  // Check if the converted input is the same as the magic word
  if (lowerCaseInput === magicWord) {
    return true;
  } else {
    return false;
  }
}

function heleftEnd() {
  background(0);
  push();
  stroke(0);
  strokeWeight(2);
  fill(255);
  textSize(100);
  text(`He left...`, width / 2, height / 2);
  pop();
}

function trueEnd() {
  background(255);
  push();
  fill(225,170,18);
  textSize(100);
  textFont(onyxFont);
  text(`And the two live happily ever after!`, width / 2, height / 2);
  text(`THE END`, width / 2, height / 2 + 200);
  pop();
}
//                                                    REJECTION PATH
function rejectp() {
  background(0);
  push();
  strokeWeight(2);
  textSize(130);
  stroke(250, 186, 95);
  textFont(onyxFont);
  text(`F*CK...`, width / 2, height / 2 -100);
  textFont(tradegothicFont);
  stroke(5,101,177);
  textSize(70);
  text(`You never thought about this...`, width / 2, height / 2 );
  stroke(5,101,177);
  text(`If only there was a way to tell him and not break his heart`, width / 2, height / 2 +70 )
  pop();
}

function rejectionintro() {
  background(69, 29, 87);
  push();
  fill(250, 186, 95);
  stroke(0);
  strokeWeight(3);
  textSize(130);
  textFont(onyxFont);
  text(`WALK THE RIGHT PATH TO REJECTION`, width / 2, height / 2 - 120);
  textSize(70);
  text(`But one wrong step and his heart will be shattered`, width / 2, height / 2 -20)
  textFont(tradegothicFont);
  textSize(50);
  text(`Control by TAPPING Arrow Keys`, width / 2, height / 2 + 100);
  text(`Press Spacebar to BEGIN`, width / 2, height / 2 + 150);
  pop();
}
//                                                   rejminigame STATE
function rejminigame() {
  background(176,128,59);
  //                                                   TILE FUNCTIONS
  for (let i = 0; i < tiles.length; i++) {
    let tile = tiles[i];
    tile.display();
    tile.colorchange();
  }
  //                                                USERREJECT FUNCTIONS
  userreject.sfxguide();
  userreject.move();
  userreject.display();
  userreject.badpath();
  userreject.goodpath();

  //
  //                                                 DESTINATION RECTANGLES
  push();
  fill(250, 186, 95)
  rect(1300, 0, 200, 700);
}
//                                                              TWO REJECTIOn ENDING STATES
//                                                               BAD REJECTION ENDING
function badrejectionEnd() {
  background(0);
  push();
  textSize(64);
  fill(166,1,7);
  textSize(50);
  text(`3 days later`, width / 2, height / 2 - 100);
  text(`You were fine, but he didn't quite... survive the breakup`, width / 2, height / 2);
  text(`Perhaps you took a wrong turn somewhere.`, width / 2, height / 2 +50);
  textSize(80);
  textFont(onyxFont);
  text(`THE END`, width / 2, height / 2 +200 )
  pop();
}
//                                                                GOOD REJECTION ENDING
function goodrejectionEnd() {
  background(125);
  push();
  textSize(64)
  fill(255);
  textSize(90);
  text(`A painful truth`, width / 2, height / 2 -150);
  textSize(50);
  text(`But he hit the road in peace... nevertheless`, width / 2, height/2 -50 );
  text(`After all, that was our 2nd date...`, width / 2, height/2+ 50 );
  textSize(80);
  textFont(onyxFont);
  text(`THE END`, width / 2, height / 2 +200 )
  pop();
}

//                                                     KEYPRESSED FUNCTION
function keyPressed() {
  if (state === `clickbegin` && keyCode === 32) {
    state = `title`;
    menumusic.loop();
  } else if (state === `title` && keyCode === 32) {
    state = `instructions`;
  } else if (state === `instructions` && keyCode === 32) {
    state = `context`;
    menumusic.amp(0.05);
  } else if (state === `context` && keyCode === 32) {
    state = `decision`;
    if (menumusic.isPlaying()) {
      menumusic.stop();
    }
  }
  //                                                ACCEPT PATH
  else if (state === `decision` && keyCode === 65) {
    state = `acceptp`;
    acceptmusic.loop();
  } else if (state === `acceptp` && keyCode === 32) {
    state = `acpintro1`;
  } else if (state === `acpintro1` && keyCode === 32) {
    state = `acpminigame1`
  } else if (state === `acpminiwin1` && keyCode === 32) {
    state = `acpintro2`;
  } else if (state === `acpintro2` && keyCode === 32) {
    state = `acpminigame2`;
  }
  // TURN TSTOP TO TRUE IF A key is PRESSED
  else if (state === `acpminigame2` && keyCode === 65) {
    for (let i = 0; i < memos.length; i++) {
      let memo = memos[i];
      memo.tstop = true;
    }
      stopSFX.play(0,1,1.5);
      acceptmusic.rate(0.5);
    // TURN TSTOP MODE TO FALSE IF S KEY IS PRESSED
  } else if (state === `acpminigame2` && keyCode === 83 &&
    userHeart2.size2 === 450) {
    for (let i = 0; i < memos.length; i++) {
      let memo = memos[i];
      memo.tstop = false;
    }
    if (acceptmusic.rate(0.6)){
      acceptmusic.rate(1);
      fastforwardSFX.play(0,1,0.2,0,1.3);
    }
  } else if (state === `acpminiwin2` && keyCode === 32) {
    state = `acpintro3`;
  } else if (state === `acpminiwin2` && keyCode === 32) {
    state = `acpintro3`;
  } else if (state === `acpintro3` && keyCode === BACKSPACE) {
    state = `acpminigame3`;
  } else if (state === `acpminigame3` && keyCode === 8) {
    currentInput = ``;
  }

  //                                       REJECT PATH
  else if (state === `decision` && keyCode === 82) {
    state = `rejectp`;
    rejectmusic.loop();
  } else if (state === `rejectp`) {
    state = `rejectionintro`;
  } else if (state === `rejectionintro` && keyCode === 32) {
    state = `rejminigame`;
  } else if (state === `heartattackEnd` && keyCode === 32) {
    location.reload();
  } else if (state === `panicEnd` && keyCode === 32) {
    location.reload();
  } else if (state === `heleftEnd` && keyCode === 32) {
    location.reload();
  } else if (state === `trueEnd` && keyCode === 32) {
    location.reload();
  } else if (state === `badrejectionEnd` && keyCode === 32) {
    location.reload();
  } else if (state === `goodrejectionEnd` && keyCode === 32) {
    location.reload();
  }
}

function keyTyped() {
  if (state === `acpminigame3`) {
    currentInput += key;
  }
}
