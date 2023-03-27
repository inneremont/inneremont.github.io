let ar
let myColor, diameter, amplitude, speed, rings, frequency

function setup() {

	createCanvas(895, 1280)*2;
	pixelDensity(1);

	ar1 = createGraphics(895, 1280, P2D, document.getElementById('canvas1'));
	ar2 = createGraphics(895, 1280, P2D, document.getElementById('canvas2'));
	ar3 = createGraphics(895, 1280, P2D, document.getElementById('canvas3'));
	ar4 = createGraphics(895, 1280, P2D, document.getElementById('canvas4'));

	let d = 1+day();
	let h = 1+hour();
	let m = 1+minute();
	let s = 1+second();

	myColor = color(random(0, 255), random(0, 255), random(0, 255), 75);
	diameter = random(50, 500)
	amplitude = s*2.5
	speed = s*.0025
	rings = random(5, 50)
	frequency = random(.5)

}

function draw() {

	//scale(.5);
	//background(255);

	ar1.fill(myColor);
	ar1.stroke(255);
	ar1.strokeWeight(1);

	ar2.fill(myColor);
	ar2.stroke(255);
	ar2.strokeWeight(1);

	ar3.fill(myColor);
	ar3.stroke(255);
	ar3.strokeWeight(1);

	ar4.fill(myColor);
	ar4.stroke(255);
	ar4.strokeWeight(1);

	//Letter T

	ar1.clear();
	lineY(width/2, height*.11, height*.89, rings, ar1);
	lineX(width*.16, width*.84, height*.11, rings, ar1);

	//Letter I

	ar2.clear();
	lineY(width/2, height*.11, height*.89, rings, ar2);
	lineX(width*.16, width*.84, height*.11, rings, ar2);
	lineX(width*.16, width*.84, height*.89, rings, ar2);

	//Letter M

	ar3.clear();
	lineY(width*.16, height*.11, height*.89, rings, ar3);
	lineY(width*.84, height*.11, height*.89, rings, ar3);
	lineZ(width*.16, height*.11, width/2, height/2, rings, ar3);
	lineZ(width*.84, height*.11, width/2, height/2, rings, ar3);

	//Letter E

	ar4.clear();
	lineY(width*.16, height*.11, height*.89, rings, ar4);
	lineX(width*.16, width*.84, height*.11, rings, ar4);
	lineX(width*.16, width*.84, height/2, rings, ar4);
	lineX(width*.16, width*.84, height*.89, rings, ar4);

	//Show Layers

	//image(ar1,0,0);
	//image(ar2,0,0);
	//image(ar3,0,0);
	//image(ar4,0,0);
}

function lineX(x1,x2,y,loopCount,layer){
	for(let i=0; i < loopCount; i++){
	let mapX = map(i,0,loopCount-1, x1, x2);
		layer.circle(mapX, y+sin(i*frequency+frameCount*speed)*amplitude, diameter);
	}
}

function lineY(x,y1,y2,loopCount,layer){
	for(let i=0; i < loopCount; i++){
	let mapY = map(i,0,loopCount-1, y1, y2);
		layer.circle(x+sin(i*frequency+frameCount*speed)*amplitude, mapY, diameter);
	}
}

function lineZ(x1,y1,x2,y2,loopCount,layer){
	for(let i=0; i < loopCount; i++){
	let mapX = map(i,0,loopCount-1, x1, x2);
	let sinX = sin(i*frequency+frameCount*speed)*amplitude
	let mapY = map(i,0,loopCount-1, y1, y2);
	let sinY = sin(i*frequency+frameCount*speed)*amplitude
		layer.circle(mapX+sinX, mapY, diameter);
	}
}
