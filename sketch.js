var hours,minutes,seconds
var hangle,mangle,sangle
function setup() {
  createCanvas(800,400);
angleMode(DEGREES)  
}

function draw() {
 background(0)
 translate(200,200);
 rotate(-90)
 hours=hour()
 minutes=minute()
   seconds=second()
   hangle=map(hours%12,0,12,0,360)
   mangle=map(minutes,0,60,0,360)
   sangle=map(seconds,0,60,0,360)
   push();
rotate(mangle);
stroke("red");
strokeWeight(10)
line(0,0,100,0)
pop();
push();
rotate(hangle);
stroke("blue");
strokeWeight(10)
line(0,0,100,0)
pop()
push();
rotate(sangle);
stroke("green");
strokeWeight(10)
line(0,0,100,0)
pop()
strokeWeight(10)
noFill()
stroke("green")
arc(0,0,300,300,0,sangle)
}