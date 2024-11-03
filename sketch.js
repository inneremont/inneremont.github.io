// p5 » hydra
// pass p5 into hydra
// built on -> cc teddavis.org 2024
// rotating type by @

let stringR = "";
let mfont; 
let slidingBox;

let dw = 0, tscl = 0;

var H = HY5.hydra('hydra', '');

speed = 10

s0.initP5() // send p5 to hydra
P5.toggle(0) // hide p5

H.pixelDensity(2) // set res

src(s0)
.repeat([1,1,1,1,1,1,3,1,1,1], [1,1,1,1,1,1,3,1,1,1], 0.0, 0.0)

//.add(src(o0).scale(()=>1-cos(time/4)/2), [.34,.0,.0,.0,.0,.0,.5,.5,.0,.0])
//.add(src(o0).scale(()=>1+sin(time/4)/2), .48)
//.modulateScale(noize(1000), .03)
.modulateScale(src(o0).scale(1.05), [.34,.0,.0,.0,.0,.0,.5,.5,.0,.0])
.pixelate([2000,2000,2000,2000,2000,2000,20,2000,2000,2000], [2000,2000,2000,2000,2000,2000,2000,100,2,2000])
//.modulate(noize(100))
.out()

function preload() {
  mfont = loadFont('assets/FolioStd-Medium.otf');
  stringR = " OILOFTROP";
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	dw = displayWidth;	
	if (dw < 500){
		scrVal = width*0.75
		tscl = 2 
	} else {
		scrVal = width*0.27
		tscl = 1
	}	

	slidingBox = new SlidingBox(20, height - 65, width - scrVal, dw);
}

function draw() {
	let sCalc = pixelDensity()
	console.log(displayWidth*sCalc)  
colorMode(HSB);
  let cx = map(mouseX, 0, width, 0, 100);
  background(0, 0, cx, 0.2);
  textFont(mfont);

  slidingBox.update();
  slidingBox.display();
  
  fill(100, cx, 100, 0.6);
  translate(width / 2 + sin(frameCount * 0.05) * 0.002, height / 2);
  let counter = stringR.length;
  for (let i = 0; i < counter; i++) {
    let lval = i * sin(frameCount * 0.005) * 5;
    let vmap = map(lval, -1, 1, 70, 10);
    let lVal = lerp(0, vmap, 0.5);
    rotate(degrees((i * sin(frameCount * 0.0005) * 0.02) + (i * cos(frameCount * 0.0005) * 0.02)));
    textSize(lVal*tscl);
    text(stringR[i], 0, i * sin(frameCount * 0.00005) * 20 + i * cos(frameCount * 0.00005) * 20);
  }
}
