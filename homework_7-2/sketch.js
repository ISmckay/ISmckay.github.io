var PacManArray = [];


function setup() {
	createCanvas(400,400);

	for (var i = 0; i < 5; i++) {
		PacManArray.push(new PacMan());
	}
}

function draw() {

	background(0);
	for (var i = 0; i < PacManArray.length; i++) {
		PacManArray[i].draw();
	}

}