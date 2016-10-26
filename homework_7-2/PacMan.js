// rotate and scale
function PacMan(){
  this.d = 40;
  this.r = this.d/2;
	this.posX = random(width);
	this.posY = random(height);
	this.speedX = 1;
	this.speedY = 1;
	this.dirX = 1;
	this.dirY = 1;
	this.mouth=1/6;
}

PacMan.prototype.draw = function() {


  push();

  translate(this.posX, this.posY);
  
  if(this.posX+this.r>=width || this.posX - this.r<=0) {
	  rotate(490);
	}
	fill('Yellow');
	arc( 0, 0, this.d, this.d, PI*this.mouth, -PI*this.mouth, PIE );
	fill(0)
	ellipse(5,-10,5,5);
	

  pop();
  this.move();

};

PacMan.prototype.move= function(){
  this.posX = this.posX + (this.speedX*this.dirX);
  if (this.posX+this.r>=width || this.posX - this.r<= 0) {
    this.dirX= -1*this.dirX;
    this.speedX= 5;
    if (this.posX>=width) {
      this.posX=width-1;
    }
    if (this.posX<=0){
      this.posX=1;
    }
  }

  if (this.posY+this.r>=height|| this.posY-this.r<= 0) {
    this.dirY= -1*this.dirY;
    this.speedY= 5;
    if (this.posY>=height) {
      this.posY=height-1;
    }
    if (this.posY<=0){
      this.posY=1;
    }
  }
};