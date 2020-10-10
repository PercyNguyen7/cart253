let contextImage;
let day1Image;
let avariceImage;
let caughtendingImage;
let trafficfastImage;
let trafficslowImage;
let carImage ={
  x:0,
  y:300,
  vx:0,
  vy:0,
  width:100,
  height:50,
  speed:0.015,
  img:undefined,
}
let carpurpleImage ={
  x:1000,
  y:200,
  width:100,
  height:50,
  speed:-15,
  img:undefined,
}
let carorangeImage ={
  x:1000,
  y:400,
  width:100,
  height:50,
  speed:-15,
  img:undefined,
}
let inloveImage;
let indebtImage;
function preload(){
  contextImage=loadImage("assets/images/context.jpg")
  day1Image=loadImage("assets/images/day1.jpg")
  avariceImage=loadImage("assets/images/avarice.jpg")
  jewelrystoreImage=loadImage("assets/images/jewelrystore.jpg")
  caughtendingImage=loadImage("assets/images/caughtending.jpg")
  trafficfastImage=loadImage("assets/images/trafficfast.jpg")
  trafficslowImage=loadImage("assets/images/trafficslow.jpg")
  carImage.img=loadImage("assets/images/car.png")
  carpurpleImage.img=loadImage("assets/images/carpurple.png")
  carorangeImage.img=loadImage("assets/images/carorange.png")
  inloveImage=loadImage("assets/images/inlove.jpg")
  indebtImage=loadImage("assets/images/indebt.jpg")
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
let state = `title`;

function setup() {
  createCanvas(1000, 600);
}


// draw()

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
  else if (state ===`lowdebt`){
    lowdebt();
  }
  else if (state === `highdebt`){
    highdebt();
  }
  else if(state === `trafficfast`){
    trafficfast();
  }
  else if(state===`trafficslow`){
    trafficslow();
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
  text(`You're IN LOVE, babyyyy!`,30,50)
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
   text(`8AM that DAY my BOIII!`,width/2,130);
   textSize(40);
   text(`Buy a RING for the proposal?`, width/2,200);
   textAlign(CENTER,CENTER);
   textSize(40);
   text(`NAW jus wing it!`, width/3,2*height/3);
   text(`GO for it baby!`,2* width/3,2*height/3);
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
  text(`8$`, width/4,height/2);
  text(`8,000$`,2* width/4,height/2);
  text(`8,000,000$`,3*width/4,height/2);
  textSize(30);
  text(`Net Worth: -25,000$`,width/6,100)
  textSize(55);
  text(`Pick THE ring`, 2*width/4,200)
  pop();

  display();
  handleInput();

  buy8$();
  buy8000$();
  buy8000000$();
}
function lowdebt(){
  push();
  image(inloveImage,0,0,1000,600);
  fill(219,73,172);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(`Now you're 33,000$ in debt.`, width/2,height/2 - 50);
  textSize(20);
  text(`But you know what. You'll freakin' do it again.`, width/2,height/2+50);
  text(`You areeee my fireeee My one desireee`, width/2,height/2+100);
  textSize(25)
  text(`Believe when I sayyyy`, width/2,height/2+150);
  textSize(30)
  text(`I want it THAT WAYYY`, width/2,height/2+200);
  pop();
}
function highdebt(){
  image(indebtImage,0,0,1000,600);
}

function trafficfast (){
  image(trafficfastImage,0,0,1000,600);
  carmove();
  cardisplays();
  carsmovement();
}

function trafficslow(){
  image(trafficslowImage,0,0,1000,600);
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`Gotta protect this 8 million baby. Not on proposal day.`,width/2,100);
  text(`Keep goin buddy.`,width/2,50);
  carmove();
  cardisplays();
  carsmovement();
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
  if(circle1.x > 2*width/3 -150 && circle1.x < 2* width/3 +150 && circle1.y < 2*height/3+40 && circle1.y >2*height/3-40){
    state = `jewelrystore`;
  }
}
function dontbuyring(){
  if (circle1.x > width/3 -150 && circle1.x < width/3 +150 && circle1.y < 2*height/3+40 && circle1.y >2*height/3-40){
  state = `avariceending`;
  }
}
function buy8$(){
  if(circle1.x > width/4 -110 && circle1.x < width/4 +110 && circle1.y < height/2+30 && circle1.y >height/2-30){
  state = `caughtending`;
  }
}
function buy8000$(){
  if(circle1.x >2* width/4 -110 && circle1.x < 2*width/4 +110 && circle1.y <height/2+30 && circle1.y >height/2-30){
  state = `lowdebt`;
  }
}
function buy8000000$(){
  if(circle1.x >3* width/4 -110 && circle1.x < 3*width/4 +110 && circle1.y <height/2+30 && circle1.y >height/2-30){
  state = `highdebt`;
  }
}

function carmove(){
  if (state === `trafficfast`){
    carImage.speed+= 0.005;
  }
  if (keyIsDown(LEFT_ARROW)) {
    carImage.vx += -carImage.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    carImage.vx += carImage.speed;
  }
  else {
    carImage.vx = 0
  }
  if (keyIsDown(UP_ARROW)) {
    carImage.vy += -3*carImage.speed;
  }
  else if (keyIsDown(DOWN_ARROW)){
    carImage.vy += 3*carImage.speed;
  }
  else {
    carImage.vy = 0
  }

}
function cardisplays(){
  carImage.x += carImage.vx;
  carImage.y += carImage.vy;
  image(carImage.img,carImage.x, carImage.y, carImage.width, carImage.height);
  image(carpurpleImage.img,carpurpleImage.x, carpurpleImage.y, carpurpleImage.width, carpurpleImage.height);
  image(carorangeImage.img,carorangeImage.x, carorangeImage.y, carorangeImage.width, carorangeImage.height);

}


function carsmovement(){
carpurpleImage.x += carpurpleImage.speed;
  if (carpurpleImage.x<0){
  carpurpleImage.x=width;
  carpurpleImage.y= random(0,600);
  carpurpleImage.speed=random(-8,-12);
  }

  carorangeImage.x += carorangeImage.speed;
    if (carorangeImage.x<0){
    carorangeImage.x=width;
    carorangeImage.y= random(0,600);
    carorangeImage.speed=random(-8,-12);
    }
    if (carorangeImage.y < carpurpleImage.y +50 && carorangeImage.y> carpurpleImage.y -50){
    carorangeImage.y+= +50;
    }
}







function keyPressed(){
  if (state === `title`){
    state = `context`;
  }
  else if (state === `context`){
    state = 'firstday';
  }
  else if (state ===`lowdebt`){
    state = `trafficfast`;
  }
  else if (state === `highdebt`){
    state = `trafficslow`;
  }
}
