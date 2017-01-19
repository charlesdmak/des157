var fatCircle=280;

function setup() {
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(50);
}

function draw() {
  background(50);
  speakers(width/5, height/2);
  speakers(4*width/5, height/2);
  if (fatCircle>=310){ //makes speakers reset to original size
    fatCircle=280;}
  }

function mouseClicked() { //code to increase speaker size when clicked
  if (mouseY<250) {
    fatCircle+=30;
  }
}

function speakers(x, y) {
  ellipseMode(CENTER);
  fill(80);
  ellipse(x, y, fatCircle, fatCircle);
  fill(200);
  ellipse(x, y, fatCircle-66, fatCircle-66);
  fill(120);
  ellipse(x, y, fatCircle-177, fatCircle-177);
  fill(299,299,39);
  ellipse(x, y, fatCircle-225, fatCircle-225);
  fill(80);
  ellipse(x, y, fatCircle-234, fatCircle-234);
  fill(200);
  ellipse (x-98, y-98, 10, 10);
  ellipse (x+98, y+98, 10, 10);
  ellipse (x+98, y-98, 10, 10);
  ellipse (x-98, y+98, 10, 10);
}
