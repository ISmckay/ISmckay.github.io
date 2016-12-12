// ball
var ballX=20;
    ballY=20;
    ballR=3;
// ballspeed 
    dX=5;
    dY=5;
    paddleY=10;
    paddleX=10;
    paddleH=120;
    paddleW=10;
    paddleY2=10;
    paddleW2=10;
    paddleH2=120;
    paddleX2=40;
    paddleSpeed=10;
    mapwidth=800;
    mapheight=500;
    player1score=1;
    player2score=1;
    // loading my sound effects in
function preload() {
  sound = loadSound('pong.mp3');
  sound2= loadSound('ballout.mp3');
}
 
function setup() {
  //changing my variables so that they are reliant upon the browswer window.
  mapwidth=windowWidth;
  mapheight=windowHeight;
  createCanvas(mapwidth,mapheight);
  ballX=windowWidth/2;
  ballY=windowHeight/2;
  paddleY=windowHeight/2;
  paddleY2=windowHeight/2;
  paddleH=windowHeight/7;
  paddleH2=windowHeight/7;
  paddleX=windowWidth-80;
  paddleX2=80
  player1score=0;
  player2score=0;
}

function draw() {
  background(0,0,0);
  // pong ball
  ellipse(ballX,ballY,ballR*2,ballR*2);
  // player 2 paddle
  rect(paddleX,paddleY,paddleW,paddleH);
  // player 1 paddle
  rect(paddleX2,paddleY2,paddleW2,paddleH2);
  scoreboard();
  paddleConstrain();

  
  // vertical dashed line, always in center of canvas
  for (var i=0;i<=height;i=i+15){
    stroke(255); 
    line(width/2,i,width/2,i+10);
  }

  // reset function for whenever a ball leaves the window.
function reset(){
  ballX=windowHeight/2;
  ballY=windowWidth/2;
  ballR=3;
  dX=5;
  dY=5;
  paddleY=windowHeight/2;
  paddleX=windowWidth-80;
  paddleH=windowHeight/7;
  paddleW=10;
  paddleY2=windowHeight/2;
  paddleW2=10;
  paddleH2=windowHeight/7;
  paddleX2=80;
  paddleSpeed=10;
}
// trying to stop the paddles from being able to leave the screen
  function paddleConstrain(){
    constrain(paddleY2,0,height);
    constrain(paddleY,0,height);
  }
  
// Paddle up and down movement tied to up and down arrow for player 2.
    if (keyIsDown(DOWN_ARROW)){
      paddleY=paddleY+paddleSpeed;
    } 
    if(keyIsDown(UP_ARROW)){
      paddleY=paddleY-paddleSpeed;
    }
// Paddle up and down movement tied to w and s keys for player 1.
    if(keyIsDown(87)){
      paddleY2=paddleY2-paddleSpeed;
    } 
    if(keyIsDown(83)){
      paddleY2=paddleY2+paddleSpeed;
    }
  // If the ball escapes from the right, player 1 scores and the game is reset. And a sound effect.
  if (ballX > width)  {
    sound2.play();
    reset();
    player1score++;
  // If the ball escapes from the left, player 2 scores and the game is reset. And a sound effect.
  }else if(ballX < 0){
    sound2.play();
    reset();
    player2score++;
  }
  // my scoreboard, scales with window width.
  function scoreboard(){
    textSize(30);
    textAlign(LEFT);
    text(player1score, windowWidth/2-50,30);
    textAlign(RIGHT);
    text(player2score, windowWidth/2+50,30);
  }

  // if ball hits paddle it reverses and speeds up by 10%
  if (collision()) {
    dX = -dX;
    dX = dX + (0.1*dX);
    sound.play();
  }
  if (collision2()) {
    dX = -dX;
    dX = dX + (0.05*dX);
    sound.play();
  }
  // preventing the ball from escaping through the top and bottom of the screen.
  if (ballY < 0){
    dY = -dY;
  }
  if (ballY > height){
    dY = -dY;
  }
  
  
  // Allow my ball's x and y coordinates be manipulated by my ball speed variables. Naturally moves the ball.
  ballX=ballX+dX;
  ballY=ballY+dY;
  
  }
  // My collision functions check for the ball intersecting with the paddles.
  function collision(){
    return (ballX >= paddleX) && (ballX <= paddleX + paddleW) &&  (ballY >= paddleY) && (ballY <= paddleY+paddleH);
   
  }
  function collision2(){
    return (ballX >= paddleX2) && (ballX <= paddleX2 + paddleW2) &&  (ballY >= paddleY2) && (ballY <= paddleY2+paddleH)
  }