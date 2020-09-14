/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(640, 480)

background(52, 73, 94 )
noStroke ()

//draw spaceship glasses
fill(86, 101, 115 )
circle(320, 280, 550)

//draw the ground 1
fill(229, 152, 102  )
ellipse(320,460,780,220)

//draw the ground
fill(20, 143, 119)
ellipse(320,460,600,200)

//draw hole
fill(27, 38, 49)
ellipse(320,460,480,200)

//draw the body
fill(133, 193, 233)
ellipse(320, 460, 360,500)

//draw the ring around head
fill(243, 156, 18 )
ellipse(320,220,240,150)

//draw the top head
fill(84, 153, 199 )
ellipse(320,180, 200,150)

//draw the top head 2
fill(84, 153, 199 )
ellipse(320,140, 180,180)

//draw the eyes
fill(33, 47, 60 )
stroke(118, 215, 196 )
strokeWeight (5)
ellipse(280,160,40,50)
ellipse(360,140,50,100)

//draw the nostrils
fill(69, 179, 157 )
stroke(243, 156, 18)
strokeWeight (3)
ellipse(300,200,20,20)
ellipse(340,200,20,20)

//draw the shades
fill(247, 249, 249 )
stroke(245, 203, 167 )
strokeWeight (5)
rectMode (CENTER)
rect(320,165, 140, 10)
rect(280,180,60,40)
rect(360,180,60,40)

//draw mouth
fill(52, 73, 94 )
stroke(35, 155, 86)
strokeWeight (5)
arc(320, 220, 100, 50, 0, PI)

//draw earth
stroke(27, 38, 49 )
strokeWeight (2)
fill(40, 116, 166)
circle(90, 80, 80)
noStroke()
fill(20, 143, 119 )
ellipse(80, 65, 40, 30)
ellipse(100, 100, 35, 20)

fill (251, 252, 252 )
circle(140, 250, 5)
circle(500, 200, 5)
circle(50, 360, 5)
circle(50, 360, 5)
circle(560, 80, 5)
circle(600, 300, 5)

//draw suit
stroke(243, 156, 18 )
strokeWeight(2)
fill(72, 201, 176 )
rect(320, 393, 20, 200)








}



// draw()
//
// Description of draw() goes here.
function draw() {

}
