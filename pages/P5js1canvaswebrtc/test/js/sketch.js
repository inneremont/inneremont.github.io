let posterLayer01, posterLayer02
let poster

let x = 0;
let y = 0;
let px = 0;
let py = 0;

let p5lm;

function preload() {
  //font = loadFont("../font/classicsansroman.otf");
  
}

function setup() {
	createCanvas(895, 1280)
	img = loadImage('js/poster01.jpg')
	pixelDensity(1)

	//posterLayer01 = createGraphics(width, height, P2D, document.getElementById('canvas01'))
	posterLayer02 = createGraphics(width, height, P2D, document.getElementById('canvas02'))

	 
	//txts = posterTxt.split('\n\n')
	// print(txts.length)
	//textSize(100);
	//textAlign(CENTER, CENTER);
	p5lm = new p5LiveMedia(this, "DATA", null, "w83C-S6DU");
  p5lm.on('data', gotData);
  p5lm.on('disconnect', gotDisconnect);
	
}

function draw() {
//background(random(255))
	console.log(gotData.x)
	//console.log(gotData.py)
	//posterLayer01.clear();
	//posterLayer01.image(img,0,0, img.width, img.height)
	
	//posterLayer02.clear();
	 posterLayer02.strokeWeight(60)
//background(0,40)
//fill(255)
 //posterLayer.clear();
 //background(0)

  
 
   //posterLayer02.px = pmouseX
  // posterLayer02.py = pmouseY
	 //posterLayer02.stroke(255,192,203, 80)
	 posterLayer02.stroke(255,150,190)

  //posterLayer02.noStroke();
  //posterLayer.translate();
  //posterLayer02.fill(255,192,203, 70)
  posterLayer02.line(x,y,px, py);
 
 	//image(posterLayer01, 0, 0, posterLayer01.width, posterLayer01.height);
	image(posterLayer02, 0, 0, posterLayer02.width, posterLayer02.height);
  

//text("hello world", random(0, width), random(0, height), 500, 500)
  	
	//posterLayer.image(get(0, 0, width, height), 0, 0, posterLayer.width, posterLayer.height)
}

function gotDisconnect(id) {
  print(id + ": disconnected");
}

function gotData(data, id) {
  print(id + ":" + data);
  
  // If it is JSON, parse it
  let d = JSON.parse(data);
  x = d.x;
  y = d.y;
  px = d.px
  py = d.py
}