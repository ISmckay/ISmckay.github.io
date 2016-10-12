// Creation of array
var circle= [];

function setup() {
  createCanvas(400,400);
}

function draw() {
  for (var i = 0; i< circle.length; i++){
    circle[i].display();
    circle[i].move();
    
    
  }
  if (mouseIsPressed) {
    circle.push(new SpecialCircle(mouseX, mouseY));
    if (circle.length >4) {
    }
    
  }
 }
