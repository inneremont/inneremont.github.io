let posterLayer

let showBG = false
let font; 

function preload() {
  font = loadFont("js/classicsansroman.otf");
}

function setup() {
	createCanvas(895, 1280,WEBGL)
	pixelDensity(1)
	
	posterLayer = createGraphics(width, height, WEBGL, document.getElementById('canvas'))
	
	//txts = posterTxt.split('\n\n')
	// print(txts.length)
	//textSize(100);
	//textAlign(CENTER, CENTER);
	textAlign(CENTER, CENTER);
	posterLayer.textFont(font);
	posterLayer.textSize(100);
	posterLayer.fill(255,0,0);
  posterLayer.text("hello world", width/2, height/2)
	
	
}

function draw() {
//background(random(255))
background(0,40)
//fill(255)
 posterLayer.clear();
 background(0)

  

  posterLayer.push();

  posterLayer.noFill();

  posterLayer.stroke(255);
  //posterLayer.translate();
  posterLayer.rotateY(0.01 * frameCount);
  posterLayer.sphere(300);

  posterLayer.pop();

 // posterLayer.push();
 // posterLayer.translate(0, -width/2, 0);
 //  posterLayer.rotateY(0);

 // posterLayer.pop();
  //posterLayer.translate(0,height/2,0);
 //translate(0, 0, 0);
 
 

  
  image(posterLayer, 0, 0, posterLayer.width, posterLayer.height);

//text("hello world", random(0, width), random(0, height), 500, 500)
  	
	//posterLayer.image(get(0, 0, width, height), 0, 0, posterLayer.width, posterLayer.height)
}