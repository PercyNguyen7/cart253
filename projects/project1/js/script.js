let coverImage;
let contextImage;
let day1Image;
let avariceImage;
let caughtendingImage;
let trafficfastImage;
let trafficslowImage;
let proposeshowerImage;
let carImage ={
  x:50,
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
let caraccidentendingImage;
let runawayendingImage;
let workinginloveImage;
let workingtiredImage;
let shesaysyesImage;
let askpriceImage;
let happypoorendingImage;
let divorceImage;
let overdoseendingImage;
let wildendingImage;
let russianrImage;
let rrhitImage;
let rrmissImage;
let rraliveendingImage;
let rrdeadendingImage;
let hideorshowerImage;
let hideringImage;
let showerImage;
let gfinshowerImage;
let stunnedshowerImage;
let user = {
  x:500,
  y:550,
  size:20,
  vx:0,
  vy:0,
  speed:4,
}

function preload(){
  coverImage=loadImage("assets/images/cover.jpg")
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
  caraccidentendingImage=loadImage("assets/images/caraccidentending.jpg")
  runawayendingImage=loadImage("assets/images/runawayending.jpg")
  workinginloveImage=loadImage("assets/images/workinginlove.jpg")
  workingtiredImage=loadImage("assets/images/workingtired.jpg")
  shesaysyesImage=loadImage("assets/images/shesaysyes.jpg")
  askpriceImage=loadImage("assets/images/askprice.jpg")
  happypoorendingImage=loadImage("assets/images/happypoorending.jpg")
  divorceImage=loadImage("assets/images/divorce.jpg")
  overdoseendingImage=loadImage("assets/images/overdoseending.jpg")
  wildendingImage=loadImage("assets/images/wildending.jpg")
  russianrImage=loadImage("assets/images/russianr.jpg")
  rrhitImage=loadImage("assets/images/rrhit.jpg")
  rrmissImage=loadImage("assets/images/rrmiss.jpg")
  rraliveendingImage=loadImage("assets/images/rraliveending.jpg")
  rrdeadendingImage=loadImage("assets/images/rrdeadending.jpg")
  hideorshowerImage=loadImage("assets/images/hideorshower.jpg")
  hideringImage=loadImage("assets/images/hidering.jpg")
  showerImage=loadImage("assets/images/shower.jpg")
  gfinshowerImage=loadImage("assets/images/gfinshower.jpg")
  stunnedshowerImage=loadImage("assets/images/stunnedshower.jpg")
  proposeshowerImage=loadImage("assets/images/proposeshower.jpg")
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
  if (state === `instructions`){
    instructions();
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
  else if(state ===`divorcetext`){
    divorcetext();
  }
  else if(state ===`divorce`){
    divorce();
  }
  else if(state ===`depression`){
    depression();
  }
  else if (state === `overdoseending`){
    overdoseending();
  }
  else if (state ===`wildending`){
    wildending();
  }
  else if (state === `overdosetext`){
    overdosetext();
  }
  else if (state === `russianroulette`){
    russianroulette();
  }
  else if (state === `regret`){
    regret();
  }
  else if (state === `pulltrigger`){
    pulltrigger();
  }
  else if (state === `rrmiss`){
    rrmiss();
  }
  else if (state === `rrhit`){
    rrhit();
  }
  else if (state === `rraliveending`){
    rraliveending();
  }
  else if (state === `rrdeadending`){
    rrdeadending();
  }
  //beginning of 8 000$ ring path
  else if (state ===`tapaway`){
    tapaway();
  }
  else if (state ===`doneworking`){
    doneworking();
  }
  else if (state ===`shower`){
    shower();
  }
  else if (state === `showersinging`){
    showersinging();
  }
  else if (state === `gfinshower`){
    gfinshower();
  }
  else if (state === `stunnedshower`){
    stunnedshower();
  }
  else if (state === `stunnedtext`){
    stunnedtext();
  }
  else if (state === `proposeshower`){
    proposeshower();
  }



  else if (state === `hidering`){
    hidering();
  }
}



function title(){
  push();
  image(coverImage,0,0,1000,600);

  fill(255);
  textSize(100)
  textAlign(CENTER,CENTER);
  text(`Proposal Day`,width/2, 100)
  textSize(30)
  text(`Press any key to begin...`,width/2,550)
  pop();
}
function instructions(){
  background(22,51,109);
  textAlign(CENTER,CENTER);
  fill(251,227,59);
  textSize(60);
  text(`Instructions`,width/2, 150);
  fill(240,240,237);
  textSize(30);
  text(`Use arrow keys to play`,width/2,250);
  text(`Navigate through each page by tapping a key`, width/2,300);
  text(`There are 9 endings. Try to fetch them all!`, width/2,350)
}
function context(){
  image(contextImage,0,0,1000,600)
  push();
  textAlign(LEFT);
  fill(254,99,97);
  textSize(40)
  text(`You're IN LOVE, babyyyy!`,30,50)
  textSize(28)
  text(`Tomorrow big day for a big boi`,30,450)
  textSize(30)
  text(`"She'll say yes!", you assure yourself.`,30,500)
  textSize(40)
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
   text(`It is that DAY my BOIII!`,width/2,130);
   textSize(40);
   text(`Buy a RING for the proposal?`, width/2,200);
   text(`NAW jus wing it!`, width/3,2*height/3);
   text(`GO for it baby!`,2* width/3,2*height/3);
   pop();

   display();
   usercontrol();
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
  usercontrol();

  buy8$();
  buy8000$();
  buy8000000$();
}
function lowdebt(){
  push();
  image(inloveImage,0,0,1000,600);
  fill(219,73,172);
  textAlign(CENTER,CENTER);
  textSize(50);
  text(`Now you're 33,000$ in debt.`, width/2,100);
  textSize(27);
  text(`But you know what. You'll freakin' do it again.`, 3*width/4,height/2+50);
  textSize(22)
  text(`You areeee my fireeee...my one desireee...`,3*width/4,height/2+100);
  text(`Believe when I sayyyy`, 3*width/4,height/2+150);
  textSize(40)
  text(`I want it THAT WAYYY`, 3*width/4,height/2+200);
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

  textAlign(CENTER,CENTER);
  fill(255,0,0);
  textSize(40);
  text(`Go thru s l o w l y`,width/2,50);
  textSize(30);
  text(`This tiny gem's worth 160 years of salary`,width/2,100);
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
  textSize(50);
  textAlign(CENTER,CENTER);
  text(`Got home safely!`,width/2,150);
  textSize(40);
  text(`The adrenaline rush kept you vigilant and focused.`,width/2,250);
  textSize(30);
  text(`Still, a man's gotta do his job.`,width/2,350);
  text(`You sit down to work on this bit of coding.`,width/2,400)
  pop();
}

function gothometired(){
  push();
  background(0);
  fill(210,0,0);
  textSize(25);
  textAlign(CENTER,CENTER);
  text(`You got home tired, mentally drained from the thoughts of your massive debt`,width/2,height/2-50);
  text(`Well someone's ought to pay the debt.`,width/2,height/2 );
  text(``,width/2,250);
  text(`You crash on the chair, pressing random buttons to pass time.`,width/2,height/2+50);
  pop();
}

function workinginlove(){
  image(workinginloveImage,0,0,1000,600);

  push();
  textAlign(CENTER,CENTER);
  textSize(40);
  text(`Tap tap tap`,width/2,450);
  text(``,width/2,500);
  pop();
}


function tapaway(){
  background(219,73,172);
  fill(255);
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`tap tap tap tap tap`,width/2,height/2-100);
  textSize(40);
  text(`andd you're done!`,width/2,height/2);
}


function doneworking(){
  image(hideorshowerImage,0,0,1000,600);

  push();
  fill(219,73,172);
  rectMode(CENTER);
  rect(width/3,500,300,60);
  rect(2*width/3,500,300,60);

  fill(255);
  textAlign(CENTER,CENTER);
  textSize(70);
  text(`Now what?`,width/2,100);
  textSize(40);
  text(`Take a shower`, width/3,500)
  text(`Hide the ring`, 2*width/3,500)
  pop();

  usercontrol();
  display();

  takeashower();
  hideringaway();
}

function shower(){
  image(showerImage,0,0,1000,600);

  push();
  fill(60,77,87);
  textAlign(CENTER,CENTER);
  textSize(50);
  text(`City of starsss`, width/2,480);
  text(`Are you shining just for meee?`, width/2,530);
  pop();
}

function showersinging(){
  background(102,148,177);

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(`"City of starsss"`, width/2,height/2-100);
  text(`"You never shined so brightlyyyy"`, width/2,height/2-50);
  textSize(50);
  text(`The bathroom door slams open!`, width/2,height/2);
    textSize(50)
  text(`A familiar face barges in...`,width/2,height/2+50);
  pop();
}

function gfinshower(){
  image(gfinshowerImage,0,0,1000,600);
  push();
  fill(60,77,87);
  textAlign(CENTER,CENTER);
  textSize(45);
  text(`Your future fiance...with the RING`, width/2,480);
  textSize(35);
  text(`You had ONE JOB...to hide it`, width/2,530);
  pop();
}
function stunnedshower(){
  image (stunnedshowerImage,0,0,1000,600);

  push();
  fill(60,77,87);
  textAlign(CENTER,CENTER);
  textSize(45);
  text(`Well this is awkward...`, width/2,480);
  fill(219,73,172)
  text(`I'm sorry...I... ruined it.`, width/2,530);
  pop();

}

function stunnedtext(){
  background(102,148,177);

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(`Your heart's racing`, width/2,height/2-150);
  text(`Well it is definitely not the ideal way to propose...`, width/2,height/2-100);
  text(`But if you don't...it'll be really ******* awkward so... `, width/2,height/2-50);
  textSize(40);
  text(`You took the ring out of her hand`, width/2,height/2);
  text(`And kneel down on one knee`, width/2,height/2+50);
  pop();
}

function proposeshower(){
  image(proposeshowerImage,0,0,1000,600);
  push();
  fill(60,77,87);
  textAlign(CENTER,CENTER);
  textSize(45);
  text(`Wheel u bee mind?`, width/2,480);
  pop();

}







function hidering(){
  image(hideringImage,0,0,1000,600);

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(50);
  text(`RING: stealth mode engaged`, width/2,200)

  pop();
}













function workingtired(){
  image(workingtiredImage,0,0,1000,600);
  push();
  fill(210,0,0);
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`Soooooooo sleepy `,width/2,450);
  textSize(40);
  text(`You feel yourself falling aslee... `,width/2,500);
  pop();
}

function sleep(){

push();

background(0);
fill(210,0,0);
textSize(25);
textAlign(CENTER,CENTER);
text(`Slept restlesssslyyy...`,width/2,100);
text(`and wake up to a loud yet familiar scream... `,width/2,150);
fill(219,73,172);
textSize(70);
text(`YESSSSSSSSSSSSS!`,width/2,350);
textSize(30);
text(`I WILL I WILL I WILL I WILL!`, width/2,430);
textSize(100);
text(`AAAAHHHHHHHHHHH`,width/2,530);
pop();
}

function shesaysyes(){
push();
image(shesaysyesImage,0,0,1000,600);
fill(0);
textAlign(CENTER,CENTER);
textSize(80);
text(`shE- FOUND the RING`,width/2,400);
textSize(30);
text(`...you didn't HIDE it you IDIOT!`,width/2,450);

pop();
}

function askprice(){
  image(askpriceImage,0,0,1000,600);
  push();
  fill(0);
  stroke(255,0,0);
  rectMode(CENTER);
  rect(width/4,550,350,80);
  rect(3*width/4,550,350,80);
  fill(255,0,0);

  textAlign(CENTER,CENTER);
  textSize(25);
  noStroke();
  text(`Her smile faded for a moment`, width/2,50);
  textSize(35);
  text(`But this RING... How much... was it?`,width/2,100);
  text(`TELL the truth`, width/4,550);
  text(`LIE about the price`,3* width/4,550);
  pop();

  usercontrol();
  display();

  telltruth();
  telllie();
}

function divorcetext(){
  push();
  background(214,8,32);
  textAlign(CENTER,CENTER);
  fill(255,204,0);
  textSize(40);
  text(`You were real broke but you kept it shut`,width/2,150);
  textSize(30);
  text(`She questioned your instant noodle diet`,width/2,200);
  text(`and BigMac on a cheatday...`, width/2, 250);
  textSize(70);
  text(`3 years later`, width/2,350);
  pop();
}

function divorce(){
  push();
  image(divorceImage,0,0,1000,600);
  fill(217,153,1);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(`You didn't get any McDonald on that cheat day.`, width/2,70);
  textSize(50);
  text(`Instead, you got a McDivorce...`,width/2,120);
  pop();
}

function depression(){
  push();
  background(0);
  stroke(255,0,0);

  fill(0);
  rectMode(CENTER);
  rect(200,350,250,60);
  rect(500,350,250,60);
  rect(800,350,250,60);

  textAlign(CENTER,CENTER);
  textSize(25);
  text(`Build a time machine!`,200,350);
  text(`Abandon society`,width/2,350);
  text(`Play Russian Roulette`, 800,350);

  textSize(60)
  text(`In Debt. Dumped. Depressed.`,width/2, 130)
  textSize(50)
  text(`What's your next move, buddy?`,width/2, 230)
  pop();

  display();
  usercontrol();

  build();
  escape();
  playrussian();
}

function overdosetext(){
  push();
  background(mouseX,mouseY,0)
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(`Time to build a TIME MACHINE`,width/2,height/2-50);
  textSize(50);
  text(`Let your imagination run WILD`,width/2,height/2);
  textSize(30);
  text(`Give your mouse a lil shake ;)`,width/2,height/2+50);

  pop();
}

function russianroulette(){
  image(russianrImage,0,0,1000,600);
  push();

  stroke(255,0,0)
  noFill(0);
  rectMode(CENTER);
  rect(width/2,500,600,80);

  textAlign(CENTER,CENTER);
  textSize(30);
  text(`Let's roll the dice`,width/2,100);
  textSize(40);
  text(`1 out of 6 for fatality`,width/2,150);
  textSize(60);
  text(`Pull the trigger`,width/2,500);

  pop();
  display();
  usercontrol();

  triggerbutton();
}

function regret(){
  push();
  background(255,0,0)
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`You instantly regret as you pull the trigger`,width/2,height/2);
  pop();
}
function rrhit(){
  image(rrhitImage,0,0,1000,600);
}

function rrmiss(){
  image(rrmissImage,0,0,1000,600);
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
  image(caraccidentendingImage,0,0,1000,600);
  textSize(80);
  fill(213,103,5);
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
  text(`YOU RAN AWAY!`,width/2,75);
  textSize(30);
  text(`Plenty of fish in the sea!`,width/2,140);
  textSize(15);
  text(`And you don't deserve her anyway, *******`,width/2,180);
  pop();
}

function happypoorending(){
  push();
  image(happypoorendingImage,0,0,1000,600);
  textAlign(CENTER,CENTER);
  fill(230);
  textSize(44);
  text(`And they lived happily forever after...in a car`,width/2,50);
  fill(199,222,236);
  textSize(25);
  text(`Had to sell all of your assets to pay back but you know what`, width/2, 500);
  text(`That ring might have been pricey, but she... `, width/2,530);
  text(`Well she is priceless :)`,width/2,560)
  pop();
}

function overdoseending(){
  image(overdoseendingImage,0,0,1000,600)
  push();
  textAlign(CENTER,CENTER);
  fill(200);
  textSize(80);
  text(`my time machine...`,width/2,500);

  pop();
}

function wildending(){
  image(wildendingImage,0,0,1000,600);
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(90);
  text(`Man Vs WILD `,width/2,450);
  textSize(40);
  text(`SPECIAL EDITION`, width/2,550);

  pop();
}

function rraliveending(){
  image(rraliveendingImage,0,0,1000,600)
  push();
  textAlign(CENTER,CENTER);
  fill(240);
  textSize(50);
  text(`You dodged a bullet...`,width/2,70);
  fill(112,141,142);
  textSize(30);
  text(`A man with nothing to lose`,width/2,120);
  text(`should still hold on to his life`,width/2,160);

}

function rrdeadending(){
  image(rrdeadendingImage,0,0,1000,600)
  push();
  textAlign(CENTER,CENTER);
  fill(114,4,20);
  textSize(90);
  text(`...`,2*width/3,500);

}

function usercontrol(){
    if (keyIsDown(LEFT_ARROW)){
      user.vx = -user.speed;
    }
    else if (keyIsDown(RIGHT_ARROW)){
      user.vx = user.speed;
    }
    else{
        user.vx = 0;
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
    user.x = constrain(user.x,0,width);
    user.y = constrain(user.y,0,height);
}

function display(){
  user.x += user.vx;
  user.y += user.vy;

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
    state = `accidentending`;
  }
  let d2 = dist(carImage.x, carImage.y, carorangeImage.x,carorangeImage.y);
  if (d2 <carImage.width/4 + carorangeImage.width/4 || d<carImage.height/4 + carorangeImage.height/4){
    state = `accidentending`;
  }
}

function caroffscreen(){
  if (carImage.x<0||carImage.y<0||carImage.y>height){
    state= `runawayending`;
  }
  else if (carImage.x>width && state === `trafficfast`){
    state= `gothome`;
  }
  else if (carImage.x>width && state ===`trafficslow`){
    state=`gothometired`;
  }
}

function telltruth(){
  if(user.x > width/4 -175 && user.x < width/4 +175 && user.y < 550+40 && user.y >550-40){
    state = `happypoorending`;
  }
}

function telllie (){
  if(user.x > 3*width/4 -175 && user.x < 3*width/4 +175 && user.y < 550+40 && user.y >550-40){
    state = `divorcetext`;
  }
}

function build(){
  if(user.x > 200-125 && user.x < 200+125 && user.y < 350+30 && user.y >350-30){
    state = `overdosetext`;
  }
}
function escape(){
  if(user.x > 500-125 && user.x < 500+125 && user.y < 350+30 && user.y >350-30){
    state = `wildending`;
  }
}

function playrussian(){
  if(user.x > 800-125 && user.x < 800+125 && user.y < 350+30 && user.y >350-30){
    state = `russianroulette`;
  }
}
function triggerbutton(){
  if(user.x > width/2-300 && user.x < width/2+300 && user.y < 500+40 && user.y >500-40){
    state = `regret`;
  }
}
function pulltrigger(){
  let r = random(1,6);
  if (r<=5) {
    print('dodged a bullet' + r);
    state = `rrmiss`;
  }
  else if (r=6) {
    print(`unfortunate circumstance` + r);
    state = `rrhit`;
  }
}

function takeashower(){
  if(user.x > width/3-150 && user.x < width/3+150 && user.y < 500+30 && user.y >500-30){
    state = `shower`;
  }
}

function hideringaway(){
  if(user.x > 2*width/3-150 && user.x < 2*width/3+150 && user.y < 500+30 && user.y >500-30){
    state = `hidering`;
  }
}


function carmove(){
  if (state === `trafficfast`){
    carImage.speed= 0.5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    carImage.vx += -carImage.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)){
    carImage.vx += carImage.speed;
  }
  else {
    carImage.vx = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    carImage.vy += -3*carImage.speed;
  }
  else if (keyIsDown(DOWN_ARROW)){
    carImage.vy += 3*carImage.speed;
  }
  else {
    carImage.vy = 0;
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
    state = `instructions`;
  }
  else if (state === `instructions`){
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
  else if (state === `divorcetext`){
    state = `divorce`;
  }
  else if (state === `divorce`){
    state = `depression`;
  }
  else if (state ===`overdosetext`){
    state =`overdoseending`;
  }
  else if (state ===`regret`){
    state = `pulltrigger`
  }
  else if (state ===`rrmiss`){
    state =`rraliveending`;
  }
  else if (state ===`rrhit`){
    state =`rrdeadending`;
  }
  else if (state ===`workinginlove`){
    state = `tapaway`;
  }
  else if (state ===`tapaway`){
    state = `doneworking`;
  }
  else if (state === `shower`){
    state = `showersinging`;
  }
  else if (state ===`showersinging`){
    state = `gfinshower`;
  }
  else if (state ===`gfinshower`){
    state = `stunnedshower`
  }
  else if (state ===`stunnedshower`){
    state = `stunnedtext`
  }
  else if (state === `stunnedtext`){
    state = `proposeshower`
  }

}
