var ballX=20;
    ballY=20;
    ballR=3;
    dX=2;
    dY=2;
    paddleY=10;
    paddleX=385;
    paddleH=30;
    paddleW=10;
    paddleY2=10;
    paddleW2=10;
    paddleH2=30;
    paddleX2=5;
    paddleSpeed=5;
    
function preload() {
  sound = loadSound('pong.mp3');
}
 
function setup() {
  createCanvas(400,400);
  // var paddleX=width-15;
}

function draw() {
  background(0,0,0);
  ellipse(ballX,ballY,ballR*2,ballR*2);
  rect(width-15,paddleY,paddleW,paddleH);
  rect(paddleX2,paddleY2,paddleW2,paddleH2);
  
  
  
  for (var i=0;i<=height;i=i+15){
    stroke(255); 
    line(200,i,200,i+10);
  }
function printScore(){
  textAlign(CENTER);
  fill(255);
  textSize(30);
  text(score, height/2, 50);
}
function score(){
  score();
}
  

    if (keyIsDown(DOWN_ARROW)){
      paddleY=paddleY+paddleSpeed;
    } 
    if(keyIsDown(UP_ARROW)){
      paddleY=paddleY-paddleSpeed;
    }
    
    if(keyIsDown(87)){
      paddleY2=paddleY2-paddleSpeed;
    } 
    if(keyIsDown(83)){
      paddleY2=paddleY2+paddleSpeed;
    }
  
  if (ballX > width || ballX < 0) {
    fill(0, 255,255, 100);
    rect(0, 0, width,height);
    noLoop();
  }

  // if ball hits paddle it reverses and speeds up
  if (collision()) {
    dX = -dX;
    dX = dX + (0.15*dX);
    sound.play();
  }
  if (collision2()) {
    dX = -dX;
    dX = dX + (0.15*dX);
    sound.play();
  }
  // ball cannot exit through top, nor bottom
  // if (ballX < 0){
  //   dX = -dX;
  // }
  if (ballY < 0){
    dY = -dY;
  }
  if (ballY > height){
    dY = -dY;
  }
  
  
  ballX=ballX+dX;
  ballY=ballY+dY;
  
  }
  
  function collision(){
    return (ballX >= paddleX) && (ballX <= paddleX + paddleW) &&  (ballY >= paddleY) && (ballY <= paddleY+paddleH);
   
  }
  function collision2(){
    return (ballX >= paddleX2) && (ballX <= paddleX2 + paddleW2) &&  (ballY >= paddleY2) && (ballY <= paddleY2+paddleH)
  }
  // function keyPressed(){
  //   if (keyCode===DOWN_ARROW){
  //     paddleY=paddleY+paddleH;
  //   }else if(keyCode===UP_ARROW){
  //     paddleY=paddleY-paddleH;
  //   }else if(keyCode===87){
  //     paddleY2=paddleY2-paddleH;
  //   }else if(keyCode===83){
  //     paddleY2=paddleY2+paddleH;
  //   }
  //   } 