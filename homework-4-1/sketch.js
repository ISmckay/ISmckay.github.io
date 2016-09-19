// intializing var xpos to equal 50
var xpos = 50;
function setup() {
  createCanvas(400,400)

  // random greetings on canvas
  var words = [ "hey", "yo","sup","yahallo","hows it going","Que pasa","guten tag"];
  // intializing word 
  var word = random(words);  
  // greeting appears in center canvas
  text(word,width*.5,height*.5);
}

function draw() {
  // making my ellipse move over by 1 pixal continuosly
  xpos = xpos + 1
  // mouse controlled circle
  ellipse(mouseX,mouseY,10,10)
// color of circle determined by mouse coords
 fill(mouseX,mouseY,0)
 //stroke of rect, white 
 stroke(250)
 //circle that will move across canvas
 ellipse(xpos, 350, 30,30)
}