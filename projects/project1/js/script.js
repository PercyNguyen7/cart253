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
  speed:0.5,
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
let caraccidentImage;
let runawayendingImage;
let workinginloveImage;
let workingtiredImage;
let shesaysyesImage;
let askpriceImage;
let happypoorendingImage;
let divorceImage;
let user = {
  x:500,
  y:550,
  size:30,
  vx:0,
  vy:0,
  speed:4,
}

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
  caraccidentImage=loadImage("assets/images/caraccident.jpg")
  runawayendingImage=loadImage("assets/images/runawayending.jpg")
  workinginloveImage=loadImage("assets/images/workinginlove.jpg")
  workingtiredImage=loadImage("assets/images/workingtired.jpg")
  shesaysyesImage=loadImage("assets/images/shesaysyes.jpg")
  askpriceImage=loadImage("assets/images/askprice.jpg")
  happypoorendingImage=loadImage("assets/images/happypoorending.jpg")
  divorceImage=loadImage("assets/images/divorce.jpg")
}
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
  else if(state===`accidentending`){
    accidentending();
  }
  else if(state===`runawayending`){
    runawayending();
  }
  else if(state===`gothome`){
    gothome();
  }
  else if(state===`gothometired`){
    gothometired();
  }
  else if(state===`workinginlove`){
    workinginlove();
  }
  else if(state === `workingtired`){
    workingtired();
  }
  else if(state === `sleep`){
    sleep();
  }
  else if(state === `shesaysyes`){
    shesaysyes();
  }
  else if(state === `askprice`){
    askprice();
  }
  else if(state === `happypoorending`){
    happypoorending();
  }
  else if(state ===`divorce`){
    divorce();
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
  fill(254,99,97);
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
  text(`Now you're 33,000$ in debt.`, width/2,height/2 - 200);
  textSize(20);
  text(`But you know what. You'll freakin' do it again.`, width/2,height/2+50);
  text(`You areeee my fireeee...my one desireee...`, width/2,height/2+100);
  textSize(25)
  text(`Believe when I sayyyy`, width/2,height/2+150);
  textSize(30)
  text(`I want it THAT WAYYY`, width/2,height/2+200);
  pop();
}
function highdebt(){
  image(indebtImage,0,0,1000,600);
  push();
  textAlign(CENTER,CENTER);
  textSize(70);
  fill(210,0,40);
  text(`-8,025,000$`, width/2 -50,150);
  textSize(35);
  fill(242,181,81);
  text(`Idk about this one, chief...`, width/2 -250,550);
  pop();
}

function trafficfast (){
  image(trafficfastImage,0,0,1000,600);
  push();
  fill(255)
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`Gotta safekeep my preciousssss`,width/2,100);
  text(`Go thru`,width/2,50);
  carmove();
  cardisplays();
  carsmovement();
  caroverlap();
  caroffscreen();
  pop();
}

function trafficslow(){
  image(trafficslowImage,0,0,1000,600);
  push();
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`SLOWLY. 8 million baby. we aint taking no risk`,width/2,100);
  text(`Go thru`,width/2,50);
  carmove();
  cardisplays();
  carsmovement();
  caroverlap();
  caroffscreen();
  pop();
}

function gothome(){
  push();
  background(219,73,172);
  fill(255);
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`You got home all excited, ready for tonight`,width/2,100);
  textSize(20);
  text(`Still, a man's gotta do his job. You sat down and do a bit of coding`,width/2,200);
  pop();
}

function gothometired(){
  push();
  background(0);
  textSize(25);
  textAlign(CENTER,CENTER);
  text(`You got home tired, mentally drained from the thoughts of your massive debt`,width/2,200);
  text(`Oh god...You still have work to do.`,width/2,250);
  text(`You sit down, exhausted, typing random letters just to pass time.`,width/2,300);
  pop();
}

function workinginlove(){
  image(workinginloveImage,0,0,1000,600);
  push();
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`3PM. You finished a bunch of works!`,width/2,450);
  text(``,width/2,500);
  pop();
}

function workingtired(){
  image(workingtiredImage,0,0,1000,600);
  push();
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`3PM.You're soooooooo sleepy `,width/2,400);
  text(`You can feel yourself falling asleep... `,width/2,450);
  pop();
}

function sleep(){
background(0);
textSize(30);
textAlign(CENTER,CENTER);
text(`You slept restlessly...`,width/2,300);
text(`and wake up to a familiar scream... `,width/2,400);
text(`YESSSSSSSSSSSSS`,width/2,400);

}

function shesaysyes(){
push();
image(shesaysyesImage,0,0,1000,600);

pop();
}

function askprice(){
  image(askpriceImage,0,0,1000,600);
  push();
  fill(0);
  stroke(255,0,0);
  rectMode(CENTER);
  rect(width/4,500,350,80);
  rect(3*width/4,500,350,80);
  fill(255,0,0);
  textSize(50);
  textAlign(CENTER,CENTER);
  textSize(35);
  text(`TELL the truth`, width/4,500);
  text(`LIE about the price`,3* width/4,500);
  pop();
  handleInput();
  display();

  telltruth();
  telllie();
}

function divorce(){
  push();
  image(divorceImage,0,0,1000,600);
  fill(217,153,1);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(`3 years later`,width/3,50);
  textSize(30);
  text(`She questioned your instant noodle diet`,width/3,100);
  text(`and McDonald on a holiday...`, width/3, 150);
  textSize(40);
  text(`She left you heartbroken`, width/3,200);
  pop();
}

function avariceending (){
  push();
  image(avariceImage,0,0,1000,600);
  textSize(60);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`Freakin' cheapskate!`,width/2,100);
  textSize(25);
  text(`Tryna propose without a ring big boi? Think again`,width/2,530);
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

function accidentending(){
  push();
  image(caraccidentImage,0,0,1000,600);
  textSize(80);
  fill(168,26,7);
  textAlign(CENTER,CENTER);
  text(`THE END`,width/3,100);
  textSize(50)
  text(`Can't propose now can you?`,width/3,150)
  pop();
}

function runawayending(){
  push();
  image(runawayendingImage,0,0,1000,600);
  textSize(75);
  fill(168,26,7);
  textAlign(CENTER,CENTER);
  text(`The night is still YOUNG`,width/2,75);
  textSize(50)
  text(`There's more fishes in the sea`,width/2,140)
  textSize(20)
  text(`You don't deserve her anyway. *******`,width/2,180)
  pop();
}

function happypoorending(){
  push();
  image(happypoorendingImage,0,0,1000,600);
  fill(217,153,1);
  textSize(30);
  text(`And they lived happily forever after...in a car`,width/3,50);
  textSize(20);
  text(`Had to sell all of your assets to pay back but you know what`, width/3, 100);
  textSize(30);
  text(`You'll freakin do it again if given the chance`, width/3,150);


  pop();
}




function handleInput(){
    if (keyIsDown(LEFT_ARROW)){
      user.vx = -user.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)){
      user.vx = user.speed;
    }
    else{
        user.vx = 0
    }
    if (keyIsDown(UP_ARROW)){
      user.vy = -user.speed;
    }
    else if (keyIsDown(DOWN_ARROW)){
      user.vy = user.speed;
    }
    else {
      user.vy = 0;
    }
}

function display(){
  user.x += user.vx
  user.y += user.vy

  fill(255)
  ellipse(user.x, user.y, user.size);
}

function buyring(){
  if(user.x > 2*width/3 -150 && user.x < 2* width/3 +150 && user.y < 2*height/3+40 && user.y >2*height/3-40){
    state = `jewelrystore`;
  }
}
function dontbuyring(){
  if (user.x > width/3 -150 && user.x < width/3 +150 && user.y < 2*height/3+40 && user.y >2*height/3-40){
  state = `avariceending`;
  }
}
function buy8$(){
  if(user.x > width/4 -110 && user.x < width/4 +110 && user.y < height/2+30 && user.y >height/2-30){
  state = `caughtending`;
  }
}
function buy8000$(){
  if(user.x >2* width/4 -110 && user.x < 2*width/4 +110 && user.y <height/2+30 && user.y >height/2-30){
  state = `lowdebt`;
  }
}
function buy8000000$(){
  if(user.x >3* width/4 -110 && user.x < 3*width/4 +110 && user.y <height/2+30 && user.y >height/2-30){
  state = `highdebt`;
  }
}
function caroverlap(){
  let d = dist(carImage.x, carImage.y, carpurpleImage.x,carpurpleImage.y);
  if (d <carImage.width/4 + carpurpleImage.width/4 || d<carImage.height/4 + carpurpleImage.height/4){
    state = `accidentending`
  }
  let d2 = dist(carImage.x, carImage.y, carorangeImage.x,carorangeImage.y);
  if (d2 <carImage.width/4 + carorangeImage.width/4 || d<carImage.height/4 + carorangeImage.height/4){
    state = `accidentending`
  }
}

function caroffscreen(){
  if (carImage.x<0||carImage.y<0||carImage.y>height){
    state= `runawayending`
  }
  else if (carImage.x>width && state === `trafficfast`){
    state= `gothome`
  }
  else if (carImage.x>width && state ===`trafficslow`){
    state=`gothometired`
  }
}

function telltruth(){
  if(user.x > width/4 -175 && user.x < width/4 +175 && user.y < 500+40 && user.y >500-40){
    state = `happypoorending`;
  }
}

function telllie (){
  if(user.x > 3*width/4 -175 && user.x < 3*width/4 +175 && user.y < 500+40 && user.y >500-40){
    state = `divorce`;
  }
}

function carmove(){
  if (state === `trafficfast`){
    carImage.speed= 0.07;
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
  carorangeImage.speed=random(-8,-12);    }
  if (carorangeImage.y < carpurpleImage.y +50 && carorangeImage.y> carpurpleImage.y -50){
  carorangeImage.y+= 50;
  }
}
function cardisplays(){
    carImage.x += carImage.vx;
    carImage.y += carImage.vy;
    image(carImage.img,carImage.x, carImage.y, carImage.width, carImage.height);
    image(carpurpleImage.img,carpurpleImage.x, carpurpleImage.y, carpurpleImage.width, carpurpleImage.height);
    image(carorangeImage.img,carorangeImage.x, carorangeImage.y, carorangeImage.width, carorangeImage.height);

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
  else if (state ===`gothome`){
    state = `workinginlove`;
  }
  else if (state === `gothometired`){
    state = `workingtired`;
  }
  else if (state === `workingtired`){
    state = `sleep`;
  }
  else if (state === `sleep`){
    state = `shesaysyes`;
  }
  else if (state === `shesaysyes`){
    state = `askprice`;
  }
}
