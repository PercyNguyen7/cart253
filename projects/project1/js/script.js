let contextImage;
let day1Image;
let avariceImage;
let caughtendingImage;
function preload(){
  contextImage=loadImage("assets/images/context.jpg")
  day1Image=loadImage("assets/images/day1.jpg")
  avariceImage=loadImage("assets/images/avarice.jpg")
  jewelrystoreImage=loadImage("assets/images/jewelrystore.jpg")
  caughtendingImage=loadImage("assets/images/caughtending.jpg")
}
let circle1 = {
  x:500,
  y:550,
  size:30,
  vx:0,
  vy:0,
  speed:4,
};
// setup()
//
// Description of setup() goes here.
let state = `title`;

function setup() {
  createCanvas(1000,600);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(45,21,56)

  if (state === `title`){
    title();
  }
  if (state === `context`){
    context();
  }
  else if (state === `firstday`){
    firstday();
  }
  else if (state === `avariceending`){
    avariceending();
  }
  else if (state === `jewelrystore`){
    jewelrystore();
  }
  else if (state === `caughtending`){
    caughtending();
  }
  else if (state === `home`){
    home();
  }




}
function title(){
  push();
  textSize(50)
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Propose Day`,width/2,height/2 -50)
  textSize(30)
  text(`Press any key...`,width/2,height/2 +50)
  pop();
}

function context(){
  image(contextImage,0,0,1000,600)
  push();
  textSize(40)
  fill(200,100,100);
  text(`You're in love, baby!`,30,50)
  textSize(25)
  text(`Tomorrow big day for a big boi`,30,450)
  textSize(27)
  text(`"She'll say yes!", you assure yourself.`,30,500)
  textSize(35)
  text(`Oh JOY! I'm your LOVERBOY!`,30, 550)
  pop();
}

function firstday(){
   image(day1Image,0,0,1000,600);
   push();
   fill(45,114,178);
   rectMode(CENTER);
   rect(width/3,400,300,80);
   rect(2*width/3,400,300,80);
   textSize(50);
   textAlign(CENTER,CENTER);
   fill(255);
   text(`8AM of that DAY my boi!`,width/2,130);
   textSize(40);
   text(`Buy a RING for the proposal?`, width/2,200);
   textAlign(CENTER,CENTER);
   textSize(40);
   text(`NAW jus wing it!`, width/3,400);
   text(`GO for it baby!`,2* width/3,400)
   pop();

   display();
   handleInput();
   dontbuyring();
   buyring();

}
function jewelrystore (){
  push();
  image(jewelrystoreImage,0,0,1000,600)
  fill(45,114,178);
  rectMode(CENTER);
  rect(width/4,300,220,60);
  rect(2*width/4,300,220,60);
  rect(3*width/4,300,220,60)
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(`80$`, width/4,300);
  text(`8,000$`,2* width/4,300);
  text(`8,000,000$`,3*width/4,300);
  textSize(30);
  text(`Net Worth: -25,000$`,width/6,100)
  textSize(55);
  text(`Pick THE ring`, 2*width/4,200)
  pop();

  display();
  handleInput();

  buy80$();
  buy8000$();
}

function home (){
  push();
  image(avariceImage,0,0,1000,600);
  textSize(50);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Freakin' cheapskate!`,width/2,150)
  pop();
}

function avariceending (){
  push();
  image(avariceImage,0,0,1000,600);
  textSize(50);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Freakin' cheapskate!`,width/2,150)
  pop();
}

function caughtending(){
  push();
  image(caughtendingImage,0,0,1000,600);
  textSize(100);
  fill(50,18,122);
  textAlign(CENTER,CENTER);
  text(`WASTED`,width/2,550);

  textSize(50);
  text(`My guy. I know you. I'm her sister...`,width/2,200);
  pop();
}


function handleInput(){
    if (keyIsDown(LEFT_ARROW)){
      circle1.vx = -circle1.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)){
      circle1.vx = circle1.speed;
    }
    else{
        circle1.vx = 0
    }
    if (keyIsDown(UP_ARROW)){
      circle1.vy = -circle1.speed;
    }
    else if (keyIsDown(DOWN_ARROW)){
      circle1.vy = circle1.speed;
    }
    else {
      circle1.vy = 0;
    }
}

function display(){
  circle1.x += circle1.vx
  circle1.y += circle1.vy

  fill(255)
  ellipse(circle1.x, circle1.y, circle1.size);


}


function buyring(){
  if(circle1.x > 2*width/3 -150 && circle1.x < 2* width/3 +150 && circle1.y < 400+40 && circle1.y >400-40){
    state = `jewelrystore`;
  }
}
function dontbuyring(){
  if (circle1.x > width/3 -150 && circle1.x < width/3 +150 && circle1.y < 400+40 && circle1.y >400-40){
  state = `avariceending`;
  }
}
function buy80$(){
  if(circle1.x > width/4 -110 && circle1.x < width/4 +110 && circle1.y < 300+30 && circle1.y >300-30){
  state = `caughtending`;
  }
}
function buy8000$(){
  if(circle1.x >2* width/4 -110 && circle1.x < 2*width/4 +110 && circle1.y < 300+30 && circle1.y >300-30){
  state = `home`;
  }
}
function keyPressed(){
  if (state === `title`){
    state = `context`;
  }
  else if (state === `context`){
    state = 'firstday';
  }
}
