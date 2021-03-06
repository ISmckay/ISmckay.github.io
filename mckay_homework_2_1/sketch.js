function setup() {
  createCanvas(480, 520)
}

function draw() {
  var x = 200; 
  // body of monster
  fill(0,250,250);
  strokeWeight(0);
  rect(170, 135, 140, 200);
  // head of monster 
  fill(0,250,250);
  arc(240, 135, 140, 100, PI, TWO_PI);
  //eye of monster
  //white eye
  fill(255,255,255);
  ellipse(240, 135, 100,50);
  // black pupil fill
  fill(0);
  //pupil
  fill(255,0,0)
  ellipse(240, 145, 20, 20);
  // outer pupil ring, red
  stroke(255,40,0);
  strokeWeight(1);
  noFill(1);
  ellipse(240,145, 25,25);
  // additional outer pupil ring, red
  strokeWeight(1);
  noFill(1);
  ellipse(240,145, 29,29);
  // mouth
  stroke(0);
  fill(0);
  arc(240, x, 80, 50, TWO_PI, PI, CHORD);
  // tongue
  fill(250,0,0);
  noStroke(1);
  arc(240, 220, 30, 15, PI, TWO_PI);
  // 4 white pointy teeth
  fill(256);
  triangle(240, x, 250, 220, 260, 200);
  triangle(220, x, 230, 220, 240, 200);
  triangle(205, x, 212.5, 215, 220, 200);
  triangle(260, x, 267.5, 215, 275, 200);
  // blue appendages
  stroke(0,250,250);
  // Right arm, upper
  line(170, 220, 120, 280);
  // Right arm, lower
  line(120, 280, 140, 330);
  // Left arm, upper
  line(310, 220, 360, 280);
  // Left arm, lower
  line(360, 280, 340, 330);
  // Right leg, upper
  line(170, 335, 150, 400);
  // Right leg, lower
  line(150, 400, 190, 490);
  // Left Leg, upper
  line(310, 335, 330, 400);
  // left leg, lower
  line(330, 400, 290, 490);
  strokeWeight(4);
  // right foot
  line(190, 490, 140, 490)
  // left foot
  line(290, 490, 340, 490);
  // angry brow
  fill(0,250,250);
  arc(240, 100, 80, 50, TWO_PI, PI);
  // hands
  ellipse(340,330, 10,10);
  ellipse(140,330,10,10);
  // hat
  fill(0);
  noStroke();
  arc(240, 90, 80, 50, PI, TWO_PI);
  strokeWeight(5);
  stroke(0)
  // brim
  line(170,90,310,90);
}