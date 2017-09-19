var circleX;
var circleY = 100;
var speed = 5;
function setup() {
  createCanvas(600,600);
  circleX = 300;
}

function draw() {
  background(250, 250, 100);

  //ellipse
  fill(250, 200, 200);
  ellipse(100, 100, 100);

    //rect
    fill(200, random(10,100), 200);
    rect(circleX, circleY, 50, 50);
  if ((circleX >= (width - 50)) || (circleX <= 0)) {
    speed = speed * -1;
    //rect
  fill(200, random(10,100), 200);
  rect(circleX, circleY, 50, 50);

  } else {
    circleX = random (10, 300);
    circleY = random(10, width -10);
  }
  circleX = circleX + speed;
  
  

}

function allies() {
//Body
fill(255,0,0);
rect(240, 145, 20, 100);

//Head
fill(0,0,255);
ellipse(240, 115, 60, 60);

//Eyes
fill(0,255,0);
ellipse(221, 115, 16, 32);
ellipse(259, 115, 16, 32);

//Legs
line(230, 195, 220, 205);
line(250, 195, 260, 205);

}