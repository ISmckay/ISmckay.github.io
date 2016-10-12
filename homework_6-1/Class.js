// setting up my object's parameters
function SpecialCircle(xpos,ypos){
  this.xx=xpos;
  this.yy=ypos;
  this.xspeed= 1;
  this.yspeed= 1;
  // setting up my objects functions
  this.display= function() {
    // making my shape
    stroke(0);
    ellipse(this.xx,this.yy, 80,80);
    
  }
  
  // move function which should hopefully make my circles bounce around the canvas
  this.move = function() {
    this.yy = this.yy +this.yspeed;
    if (this.yy >= height || this.yy <= 0);
      this.yspeed = this.yspeed * -1;
  }
  this.xx = this.xx +this.xspeed;
    if (this.xx >= height || this.xx <= 0);
      this.xspeed = this.xspeed * -1;
  
}