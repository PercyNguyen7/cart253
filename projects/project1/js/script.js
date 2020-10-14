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
  speed:0.02,
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
let showerendingImage;
let showernoringImage;
let sheshomeImage;
let lookatgfImage;
let torestaurantImage;
let stareatgfImage;
let stareendingImage;
let smoochcarImage;
let atrestaurantImage;
let menuImage;
let chickenwingsImage;
let wingsendingImage;
let omeletteImage;
let omelettedisasterImage;
let omeletteendingImage;
let parkwalkImage;
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
  showerendingImage=loadImage("assets/images/showerending.jpg")
  showernoringImage=loadImage("assets/images/showernoring.jpg")
  sheshomeImage=loadImage("assets/images/sheshome.jpg")
  lookatgfImage=loadImage("assets/images/lookatgf.jpg")
  torestaurantImage=loadImage("assets/images/torestaurant.jpg")
  stareatgfImage=loadImage("assets/images/stareatgf.jpg")
  stareendingImage=loadImage("assets/images/driveandstare.jpg")
  smoochcarImage=loadImage("assets/images/smooch.jpg")
  atrestaurantImage=loadImage("assets/images/reachrestaurant.jpg")
  menuImage=loadImage("assets/images/dinnerchoice.jpg")
  chickenwingsImage=loadImage("assets/images/chicken.jpg")
  wingsendingImage=loadImage("assets/images/chokeending.jpg")
  omeletteImage=loadImage("assets/images/omelette.jpg")
  omelettedisasterImage=loadImage("assets/images/preomeletteending.jpg")
  omeletteendingImage=loadImage("assets/images/omeletteending.jpg")
  parkwalkImage=loadImage("assets/images/walkingnight.jpg")
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
    //beginning of 8 000 000$ ring path
  }
  else if (state === `highdebt`){
    highdebt();
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
  else if(state===`gothometired`){
    gothometired();
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
  else if (state ===`lowdebt`){
    lowdebt();
  }
  else if(state === `trafficfast`){
    trafficfast();
  }
  else if(state===`gothome`){
    gothome();
  }
  else if(state===`workinginlove`){
    workinginlove();
  }

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
  else if (state === `showerendingtext`){
    showerendingtext();
  }
  else if (state === `showerending`){
    showerending();
  }
  else if (state === `hidering`){
    hidering();
  }
  else if (state === `showernoring`){
    showernoring();
  }
  else if (state === `showersingingnr`){
    showersingingnr();
  }
  else if (state === `gfishome`){
    gfishome();
  }
  else if (state === `lookatgf`){
    lookatgf();
  }
  else if (state === `askdinnertext`){
    askdinnertext();
  }
  else if (state === `torestaurant`){
    torestaurant();
  }
  else if (state === `complimenttext`){
    complimenttext();
  }
  else if (state === `stareintensely`){
    stareintensely();
  }
  else if (state === `stareending`){
    stareending();
  }
  else if (state === `smoochcar`){
    smoochcar();
  }
  else if (state === `atrestaurant`){
    atrestaurant();
  }
  else if (state === `mannerstext`){
    mannerstext();
  }
  else if (state === `menu`){
    menu();
  }
  else if (state ===`chickenwingstext`){
    chickenwingstext();
  }
  else if (state === `chickenwings`){
    chickenwings();
  }
  else if (state === `wingsproposetext`){
    wingsproposetext();
  }
  else if (state === `wingsending`){
    wingsending();
  }
  else if (state === `omelettedufrtext`){
    omelettedufrtext();
  }
  else if (state ===`omelettedecision`){
    omelettedecision();
  }
  else if (state ===`omelettedisaster`){
    omelettedisaster();
  }
  else if (state ===`omeletteending`){
    omeletteending();
  }
  else if (state ===`parkwalk`){
    parkwalk();
  }
  else if (state ===`finaldecision`){
    finaldecision();
  }
  else if (state ===`banending`){
    banending();
  }
  else if (state ===`trueending`){
    trueending();
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
  text(`There are 14 endings. Try to fetch them all!`, width/2,350);
  text(`Game only ends on page with "THE END"`, width/2,400);
  fill(251,227,59);
  textSize(40);
  text(`Rated M: For mature players 17+`,width/2,500);
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
  text(`But you know what. You'll freakin' do it again.`, 2*width/4,height/2+50);
  textSize(22)
  text(`You areeee my fireeee...my one desireee...`,2*width/4,height/2+100);
  text(`Believe when I sayyyy`, 2*width/4,height/2+150);
  textSize(40)
  text(`I want it THAT WAYYY`, 2*width/4,height/2+200);
  pop();
}
function trafficfast (){
  image(trafficfastImage,0,0,1000,600);
  push();
  fill(255)
  textSize(50);
  textAlign(CENTER,CENTER);
  text(`Gotta safekeep my preciousssss`,width/2,100);
  text(`Go home pal!`,width/2,50);
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

  push();
  fill(255);
  textSize(30);
  textAlign(CENTER,CENTER);
  text(`tap tap tap tap tap`,width/2,height/2-100);
  textSize(40);
  text(`andd you're done!`,width/2,height/2);
  pop();
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
  text(`Now what?`,width/2,150);
  textSize(40);
  text(`Take a shower`, width/3,500)
  text(`Hide the ring`, 2*width/3,500)
  pop();

  usercontrol();
  display();

  takeashower();
  hideringaway();
}
//shower path (8000$)
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
  text(`A familiar face barges in...`,width/2,height/2+60);
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
function showerendingtext(){
  background(244,238,212);

  push();
  textAlign(CENTER,CENTER);
  textSize(40);
  fill(216,163,37)
  text(`So that's how i married your mom`, width/2,height/2-100);
  textSize(50);
  text(`buttnaked...`, width/2,height/2);
  pop();
}
//hide ring path (8000$)
function hidering(){
  image(hideringImage,0,0,1000,600);

  push();
  fill(244,170,247);
  textAlign(CENTER,CENTER);
  textSize(50);
  text(`RING: stealth mode engaged`, width/2,150)
  textSize(40);
  text(`Time for shower`, width/2,200)
  pop();
}
function showernoring(){
  image(showernoringImage,0,0,1000,600);

  push();
  fill(60,77,87);
  textAlign(CENTER,CENTER);
  textSize(45);
  text(`"City of starsss"`, width/2,480);
  text(`"Are you shining just for me?"`, width/2,530);
  pop();

}
 function showersingingnr(){
   background(244,170,247)

   push();
   textAlign(CENTER,CENTER);
   textSize(30);
   text(`"City of starsss"`, width/2,height/2-100);
   text(`"You never shined so brightlyyyy"`, width/2,height/2-50);
   textSize(50);
   text(`Andd you're all cleaned!`, width/2,height/2);
   text(`You step out to see...`, width/2,height/2+50);
   pop();

 }
function gfishome(){
  image(sheshomeImage,0,0,1000,600);

  push();
  fill(255)
  textAlign(CENTER,CENTER);
  textSize(50);
  text(`your girlfriend at the door!`, width/2,500);
  pop();
}
function lookatgf(){
  image(lookatgfImage,0,0,1000,600);

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(50);
  text(`"She's my sunshine in the day"`, width/2,500);
  text(`"and my moonlight at night..."`, width/2,550);
  pop();
}
function askdinnertext(){
  background(244,170,247)

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(35);
  text(`"Wanna go to A Romantic Restaurant?" you asked`, width/2,150);
  text(`"Oh heck ye" she replied`, width/2,200);
  textSize(40);
  text(`Step 1: ask her out for dinner: COMPLETED`,width/2,300);
  textSize(60);
  text(`Do NOT f this up now big boi`, width/2, 400)

  pop();
}
function torestaurant(){
  image(torestaurantImage,0,0,1000,600)

  push();
  fill(255);
  rectMode(CENTER);
  rect(width/4,180,300,60);
  rect(3*width/4,180,300,60);

  fill(255);
  textAlign(CENTER,CENTER);
  textSize(45);
  text(`You can sense her fragrance`, width/2,50);
  text(`What will you do?`,width/2,100);
  fill(146,57,123);
  textSize(35);
  text(`Stare INTENSELY`, width/4,180);
  text(`Compliment her`, 3*width/4,180);
  pop();

  usercontrol();
  display();

  compliment();
  stare();
}
function stareintensely (){
  image(stareatgfImage,0,0,1000,600);

  push();
  fill(247,218,176);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(`There's my wife`, width/2,450);
  textSize(35);
  text(`Well not yet... soon to be wife...I can stare at her all day`, width/2,500);
  text(`I mean look at her. Look at how stunning she i-`, width/2,550);

  pop();
}
function complimenttext (){
  background (146,57,123);

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(`"Hey babe just thought I'd remind you of how beautiful you are"`, width/2,250);
  textSize(40);
  text(`The fragrance ITENSIFIES`,width/2,350);
  pop();
}
function smoochcar(){
  image(smoochcarImage,0,0,1000,600);

  push();
  fill(217,45,106);
  textAlign(CENTER,CENTER);
  textSize(25);
  text(`*inserts smooch sound effect*`, width/2,50);
  textSize(70);
  text(`You're on CLOUD 9 BABY!`,width/2,100);
  pop();
}
function atrestaurant(){
  image(atrestaurantImage,0,0,1000,600);

  push();
  fill(255);
  textAlign(LEFT,LEFT);
  textSize(40);
  text(`There it is.`, 50,300);
  textSize(30);
  text(`Your heart beats faster by the minute`,50,350);
  pop();
}
function mannerstext(){
  background(195,117,55);

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(`You opened the door and pulled out her chair`, width/2,250);
  text(`"I guess chivalry isn't dead yet" she giggled`, width/2,300);
  text(`"Guess not" you reply and sit down`, width/2,350);
  pop();
}
function menu(){
  image(menuImage,0,0,1000,600);

  push();
  fill(0);
  rectMode(CENTER);
  rect(width/3,500,320,80);
  rect(2*width/3+25,500,320,80);


  fill(255);
  textAlign(CENTER,CENTER);
  textSize(50);
  text(`"May I take your orders?"`, width/2,220);
  fill(255);
  textSize(30);
  text(`Omelette du fromage`,width/3,500)
  text(`Buffalo chicken wings`,2*width/3+25,500)

  pop();

  usercontrol();
  display();

  omelette();
  chicken();
}
//chicken wings path (8000$,hide ring)
function chickenwingstext(){
background(195,117,55);

  push();
  fill(255);
  textAlign(CENTER,CENTER);

  fill(255);
  textSize(30);
  text(`You make small chit chats while sweating like a pig...`,width/2,200)
  text(`Bloody hell MAN UP big boi`,width/2,250)
  textSize(20);
  text(`STOP SMILING AWKWARDLY EVERY 5 SECONDS!`,width/2,300)
  textSize(35);
  text(`Your anxiety gives you a hard time digesting`, width/2,350);

  pop();
}
function chickenwings(){
  image(chickenwingsImage,0,0,1000,600);

  push();
  fill(255);
  textSize(30);
  text(`Enough is enough... you finally gathered enough courage`,width/2,30);
  text(`Time to PROPOSE!`,width/2,70);
  pop();
}
function wingsproposetext(){
  background(244,170,247)

  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(40);
  text(`Listen CLOSELY, Here's the plan`,width/2,50);
  textSize(30);
  text(`1.You will stand up, grab everyone's attention`,width/2,100);
  text(`2.Tell her how much she means to you`,width/2,150);
  text(`3.Step in front of her`,width/2,200);
  text(`4.Grab her hand`,width/2,250);
  text(`5.Kneel down`, width/2,300);
  text(`6.Take out the proposal ring box`, width/2,350)
  text(`7.Pop it open`, width/2,400);
  text(`8.Pop the QUESTION`, width/2,450);
  text(`Easy. Got it?`,width/2,500);
  text(`alright...1...2...cough..cough..`, width/2,550);
  pop();

}
//omelette path (8000$,hide ring)
function omelettedufrtext(){
  background(246,223,116);

    push();
    textAlign(CENTER,CENTER);
    fill(255);
    textSize(30);
    text(`Mmmm smells bloody delicious`,width/2,250);
    text(`The taste of the omelette eases your stress`,width/2,300);
    text(`It gives you strength and strengthens your will`,width/2,350);
    pop();
}

function omelettedecision(){
  image(omeletteImage,0,0,1000,600);

  push();
  fill(0);
  rectMode(CENTER);
  rect(width/4,300,340,80);
  rect(3*width/4,300,260,80);


  textAlign(CENTER,CENTER);
  fill(255);
  textSize(40);
  text(`Plan ahead!Once finished with your meal...`,width/2,50);
  text(`Pop the question`,width/4,300);
  text(`Take her out`,3*width/4,300);
  pop();

  usercontrol();
  display();

  popquestion();
  takeout();
}
function omelettedisaster(){
  image(omelettedisasterImage,0,0,1000,600);
  push();
  textAlign(CENTER,CENTER);
  fill(255,255,187);
  textSize(40);
  text(`The crowd is cheering you on`,width/2,100);
  textSize(60);
  text(`You feel CONFIDENT`,width/2,550);
  pop();
}
function omeletteending(){
 image(omeletteendingImage,0,0,1000,600);

 push();
 textAlign(CENTER,CENTER);
 fill(255,255,187);
 textSize(40);
 text(`PUBLIC PROPOSAL ISN'T`,width/2,500);
 text(`EVERYONE'S CUP OF TEA`,width/2,550);
 text(`THE END`,width/2,50);
 pop();
}
function parkwalk(){
  image(parkwalkImage,0,0,1000,600);

  push();
  textAlign(LEFT,LEFT);
  fill(255);
  textSize(30);
  text(`The two take a walk in your childhood park`,50,50);
  text(`It was midnight. No one's to be seen`,50,100);
  pop();
}
function finaldecision(){
  background(22,51,109);

  push();
  stroke(251,227,59)
  noFill()
  rectMode(CENTER);
  rect(width/4,450,420,60);
  rect(3*width/4,450,350,60);

  textAlign(CENTER,CENTER);
  textSize(60);
  text(`THIS IS IT!`,width/2, 200);
  textSize(40);
  text(`You've made it this far!`,width/2, 250);
  text(`What will be your FINAL DECISION?`,width/2, 300);
  textSize(30);
  text(`How about that bush over th...`,width/4,450)
  text(`Will you marry me?`,3*width/4,450)

  pop();

  usercontrol();
  display();

  fun();
  commit();
}



//8 million dollar path
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
function trafficslow(){
  image(trafficslowImage,0,0,1000,600);
  push();

  textAlign(CENTER,CENTER);
  fill(255,0,0);
  textSize(40);
  text(`Go home - S L O W L Y`,width/2,50);
  textSize(30);
  text(`This bloody thing's worth 160 years of salary`,width/2,100);
  carmove();
  cardisplays();
  carsmovement();
  caroverlap();
  caroffscreen();
  pop();
}
function gothometired(){
  push();
  background(0);
  fill(210,0,0);
  textSize(25);
  textAlign(CENTER,CENTER);
  text(`You got home tired, mentally drained from the thoughts of your massive debt`,width/2,height/2-50);
  text(`Well someone's ought to pay the debt.`,width/2,height/2);
  text(``,width/2,250);
  text(`You crash on the chair, pressing random buttons to pass time.`,width/2,height/2+50);
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
  text(`Slept restlessslyyyy...`,width/2,100);
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
//tell lie path (8 000 000$)
function divorcetext(){
  push();
  background(214,8,32);
  textAlign(CENTER,CENTER);
  fill(255,204,0);
  textSize(40);
  text(`You were real broke but you kept it shut`,width/2,150);
  textSize(30);
  text(`She questioned your instant noodle diet`,width/2,200);
  text(`and BigMac on a cheat day...`, width/2, 250);
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
  text(`1 out of 6 chances for fatality`,width/2,150);
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

//incomplete endings
function avariceending (){
  push();
  image(avariceImage,0,0,1000,600);
  textSize(60);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`FREAKIN' CHEAPSKATE!`,width/2,50);
  textSize(30);
  text(`Tryna propose without a ring big boi? Think again`,width/2,100);
  textSize(30);
  text(`THE END`,900,550);
  pop();
}

function caughtending(){
  push();
  image(caughtendingImage,0,0,1000,600);
  textSize(100);
  fill(50,18,122);
  textAlign(CENTER,CENTER);
  text(`WASTED (THE END)`,width/2,550);
  textSize(50);
  text(`My guy. I know you. I'm her sister...`,width/2,200);
  pop();
}

function accidentending(){
  push();
  image(caraccidentendingImage,0,0,1000,600);
  textSize(60);
  fill(213,103,5);
  textAlign(CENTER,CENTER);
  text(`AH AH AH AH STAYIN' ALIVE`,width/2,100);
  textSize(50)
  text(`Can't propose now can you?`,width/2,150)
  textSize(30);
  text(`THE END`,900,550);
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
  text(`Plus you don't deserve her anyway, jack***`,width/2,180);
  textSize(30);
  text(`THE END`,900,550);
  pop();
}

// 8 000 000 ring endings
function happypoorending(){
  push();
  image(happypoorendingImage,0,0,1000,600);
  textAlign(CENTER,CENTER);
  fill(230);
  textSize(40);
  text(`AND THEY LIVED HAPPILY EVER AFTER...IN A CAR`,width/2,50);
  fill(199,222,236);
  textSize(25);
  text(`Had to sell all of your assets to pay back but you know what`, width/2, 500);
  text(`That ring might have been pricey, but she... `, width/2,530);
  text(`Well she is priceless :)`,width/2,560)
  textSize(30);
  text(`THE END`,900,550);
  pop();
}

function overdoseending(){
  image(overdoseendingImage,0,0,1000,600)
  push();
  textAlign(CENTER,CENTER);
  fill(250);
  textSize(60);
  text(`MY TIME MACHINE...`,width/2,500);
  textSize(30);
  text(`THE END`,900,50);
  pop();
}

function wildending(){
  image(wildendingImage,0,0,1000,600);
  push();
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(90);
  text(`MAN VS WILD `,width/2,450);
  textSize(40);
  text(`SPECIAL EDITION`, width/2,550);
  textSize(30);
  text(`THE END`,900,50);
  pop();
}

function rraliveending(){
  push();
  image(rraliveendingImage,0,0,1000,600)
  push();
  textAlign(CENTER,CENTER);
  fill(240);
  textSize(60);
  text(`YOU DODGED A BULLET...`,width/2,70);
  fill(112,141,142);
  textSize(30);
  text(`A man with nothing to lose`,width/2,120);
  text(`should still hold on to his life`,width/2,160);
  fill(240);
  textSize(30);
  text(`THE END`,900,550);
  pop();
}

function rrdeadending(){
  image(rrdeadendingImage,0,0,1000,600)
  push();
  textAlign(CENTER,CENTER);
  fill(114,4,20);
  textSize(90);
  text(`...`,2*width/3,500);
  textSize(30);
  text(`THE END`,900,550);
  pop();
}
//8000$ ring endings
function showerending(){
  image(showerendingImage,0,0,1000,600);

  push();
  textAlign(CENTER,CENTER);
  fill(255)
  textSize(40);
  text(`WOWWW... AWESOMEEEE`, width/2,550);
  textSize(30);
  text(`THE END`,900,50);
  push();
}

function stareending(){
  image(stareendingImage,0,0,1000,600);

  push();
  fill(223,211,193);
  textAlign(CENTER,CENTER);
  textSize(60);
  text(`DON'T STARE AND DRIVE`, width/2,500);
  textSize(30);
  text(`THE END`,900,50);

  pop();
}

function wingsending(){
  image(wingsendingImage,0,0,1000,600);

  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(`Pick something without bone next time`, width/2,50);
  textSize(48);
  text(`Guess you really... choked... that proposal`, width/2,100);
  textSize(30);
  text(`Badumtsss`, width/2,150);
  text(`THE END`,900,550);
  pop();
}

function banending(){
  background(22,51,109);

  push();
  fill(251,227,59);
  textAlign(CENTER,CENTER);
  textSize(30);
  text(`You've been permanently banned from this game`,width/2, 250);
  text(`No refund will be granted`,width/2, 300);
  text(`For obvious reasons...`,width/2, 350);
  pop();
}

function trueending(){
  image(coverImage,0,0,1000,600);
  push();
  fill(255);
  textSize(80);
  textAlign(CENTER,CENTER);
  text(`YESSSSSSS`,width/2, 100);
  textSize(40);
  text(`CONGRATULATIONS, YOU WON (HER)`,width/2, 550);
  pop();
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
function compliment(){
  if(user.x > 3*width/4-150 && user.x <3*width/4+150 && user.y < 180+30 && user.y >180-30){
    state = `complimenttext`;
  }
}
function stare(){
  if(user.x > width/4-150 && user.x <width/4+150 && user.y < 180+30 && user.y >180-30){
    state = `stareintensely`;
  }
}
function omelette(){
    if(user.x > width/3-160 && user.x <width/3+160 && user.y < 500+40 && user.y >500-40){
      state = `omelettedufrtext`;
    }
}
function chicken(){
  if(user.x > 2*width/3-135 && user.x <2*width/3+185 && user.y < 500+40 && user.y >500-40){
      state = `chickenwingstext`;
    }
}
function popquestion(){
  if(user.x > width/4-170 && user.x < width/4+170 && user.y < 300+40 && user.y >300-40){
    state = `omelettedisaster`;
  }
}
function takeout(){
  if(user.x > 3*width/4-130 && user.x < 3*width/4+130 && user.y < 300+40 && user.y >300-40){
    state = `parkwalk`;
  }
}
function fun(){
  if(user.x > width/4-210 && user.x < width/4+210 && user.y < 450+30 && user.y >450-30){
    state = `banending`;
  }
}
function commit(){
  if(user.x > 3*width/4-210 && user.x < 3*width/4+210 && user.y < 450+30 && user.y >450-30){
    state = `trueending`;
  }
}
function carmove(){
  if (state === `trafficfast`){
    carImage.speed= 0.05;
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
    state = `stunnedshower`;
  }
  else if (state ===`stunnedshower`){
    state = `stunnedtext`;
  }
  else if (state === `stunnedtext`){
    state = `proposeshower`;
  }
  else if (state === `proposeshower`){
    state = `showerendingtext`;
  }
  else if (state ===`showerendingtext`){
    state = `showerending`;
  }
  else if (state ===`hidering`){
    state = `showernoring`;
  }
  else if (state === `showernoring`){
    state = `showersingingnr`;
  }
  else if (state === `showersingingnr`){
    state = `gfishome`;
  }
  else if (state === `gfishome`){
    state = `lookatgf`;
  }
  else if (state === `lookatgf`){
    state = `askdinnertext`;
  }
  else if (state === `askdinnertext`){
    state = `torestaurant`;
  }
  else if (state === `stareintensely`){
    state = `stareending`;
  }
  else if (state === `complimenttext`){
    state = `smoochcar`;
  }
  else if (state === `smoochcar`){
    state = `atrestaurant`;
  }
  else if (state === `atrestaurant`){
    state = `mannerstext`;
  }
  else if (state === `mannerstext`){
    state = `menu`;
  }
  else if (state === `chickenwingstext`){
    state = `chickenwings`;
  }
  else if (state === `chickenwings`){
    state = `wingsproposetext`;
  }
  else if (state === `wingsproposetext`){
    state = `wingsending`;
  }
  else if (state ===`omelettedufrtext`){
    state = `omelettedecision`;
  }
  else if (state ===`omelettedisaster`){
    state = `omeletteending`;
  }
  else if (state ===`parkwalk`){
    state =`finaldecision`;
  }
}
