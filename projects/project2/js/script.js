"use strict";
//                                           VARIABLES
let visible = true;
let fillbg = {
  r:176,
  g:31,
  b:44,
}
let userreject;
let userHeart;
let userHeart2;
let timer1;
let chain1;
let memos = [];
let numMemos = 100;

//                                            SFX/ MUSIC
let acceptmusic;
let rejectmusic;

let loseSFX;
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
  acceptmusic = loadSound(`assets/sounds/POSING.mp3`);
  rejectmusic = loadSound(`assets/sounds/HTRJ.mp3`)

  loseSFX= loadSound(`assets/sounds/loseSFX.mp3`)
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

  setInterval(blink, 1000);

  userStartAudio()
   oscillator = new p5.Oscillator(880, `sine`);
   rightSFX.amp(2.5);
   leftSFX.amp(3.5);
   downSFX.amp(2.5);
   upSFX.amp(2.5);
   oscillator.amp(0.3);
   acceptmusic.amp(0.4);
   rejectmusic.amp(0.3);
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
  //                                                 REJECTION PATH
  userreject = new UserReject(userrejectImage);
  //                                                  RED TILES
  //                                                  1st COLUMN
  for (let i = 0; i < numTiles; i++) {
    let x = 200;
    let y = -100;
    for (let j = 0; j < 7; j++) {
      y +=  100
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
  if (state === `heartattackEnd`){
    heartattackEnd();
  }
  if (state === `acpminiwin1`){
    acpminiwin1();
  }
  if (state === `acpintro2`){
    acpintro2();
  }
  if (state === `acpminigame2`){
    acpminigame2();
  }
  if (state === `panicEnd`){
    panicEnd();
  }
  if (state === `acpminiwin2`){
    acpminiwin2();
  }
  if (state === `acpintro3`){
    acpintro3();
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
  text(`Press Spacebar to begin`, width / 2, height / 2);
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
function acpintro1(){
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
function heartattackEnd(){
  background(0);
  push();
  noFill();
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`How do you mend a heart attack`, width/2, height/2);
  textSize(70);
  pop();
}

function acpminiwin1(){
  background(200,2,10);
  push();
  noFill();
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`You survived the first trial of love!`, width/2, height/2);
  text(`Now face the 2nd :)`, width/2, height/2 +100);
  pop();
}

function acpintro2(){
  background(100);
  push();
  noFill();
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`Collect your memories`, width/2, height/2);
  pop();
}

function acpminigame2(){
  background(fillbg.r,fillbg.g,fillbg.b);

  blinkog();

//  memos
  for (let i = 0; i < memos.length; i++) {
      let memo = memos[i];

      if (memo.active) {
        if (memo.tstop === true){
          fillbg ={
            r:34,
            g:64,
            b:123
          }
        }
        else {
          fillbg ={
            r:152,
            g:35,
            b:43,
          }
        }
    memo.move();
    memo.bounce();
    memo.display();
    let d = dist(memo.x, memo.y, userHeart2.x, userHeart2.y);
    if (d < memo.size/2 + userHeart2.size/2){
       memos.splice(i, 1);
       break;
     }

     }
   }

  //                                                  WIN GAME CONDITIOn
    if (memos.length <= 0){
    state = `acpminiwin2`
  }

    userHeart2.display();
    userHeart2.move();
    userHeart2.displaypursuit();
    userHeart2.movepursuit1();
    userHeart2.caught();


}
function blinkog(){
  push();

  if (visible && userHeart2.size === 30){
    fill(0);
    rectMode(CENTER);
    rect(width/2 - 150,height/2,200, 500);
    rect(width/2 + 150,height/2,200, 500);
  }
  pop();
}
function blink(){
  visible = !visible;
}

function panicEnd(){
  background(0);
  push();
  noFill();
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`Panic Attac`, width/2, height/2);
  pop();

}
function acpminiwin2(){
  background(200);
  push();
  noFill();
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`You gathered your thoughts`, width/2, height/2);
  pop();
}

function acpintro3(){
  background(250);
  push();
  noFill();
  stroke(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(`You gathered your thoughts`, width/2, height/2);
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
  userreject.sfxguide();
  userreject.move();
  userreject.display();
  userreject.badpath();
  userreject.goodpath();

  //                                                DESTINATION RECTANGLES
  rect(1300, 0, 100, 700);
}

//                                                              TWO REJECTIOn ENDING STATES
//                                                               BAD REJECTION ENDING
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
//                                                                GOOD REJECTION ENDING
function goodrejectionEnd() {
  background(125);
  push();
  textSize(64)
  noFill();
  stroke(255);
  textAlign(CENTER, CENTER);
  textSize(70);
  text(`A painful truth`, width / 2, height / 2);
  textSize(90);
  text(`But he hit the road in peace... nevertheless`, width / 2, 440);
  pop();
}


//                                                     KEYPRESSED FUNCTION
function keyPressed() {
  if (state === `clickbegin`&& keyCode === 32) {
    state = `title`;
  } else if (state === `title`&& keyCode === 32) {
    state = `instructions`;
  } else if (state === `instructions`&& keyCode === 32) {
    state = `context`;
  } else if (state === `context`&& keyCode === 32) {
    state = `decision`;
  }
//                                                ACCEPT PATH
  else if (state === `decision` && keyCode === 65) {
    state = `acceptp`;
    acceptmusic.loop();

  } else if (state === `acceptp`&& keyCode === 32) {
    state = `acpintro1`;
  } else if (state ===`acpintro1`&& keyCode === 32) {
    state = `acpminigame1`
  } else if (state === `acpminiwin1` && keyCode === 32) {
    state = `acpintro2`;
  } else if (state === `acpintro2` && keyCode === 32) {
    state = `acpminigame2`;
  } else if (state === `acpminigame2` && keyCode === 65) {
      for (let i = 0; i < memos.length; i++) {
          let memo = memos[i];
          memo.tstop = true;
      }
  } else if (state === `acpminigame2` && keyCode === 83 &&
    userHeart2.size2 === 450) {
        for (let i = 0; i < memos.length; i++) {
            let memo = memos[i];
            memo.tstop = false;
        }
      }
//                                                 REJECT PATH
  else if (state === `decision` && keyCode === 82) {
    state = `rejectp`;
    rejectmusic.loop();
  } else if (state === `rejectp`) {
    state = `rejectionintro`;
  } else if (state === `rejectionintro` && keyCode === 32) {
      state = `rejminigame`;
  }
}
