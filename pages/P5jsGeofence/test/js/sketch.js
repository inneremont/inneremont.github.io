let posterLayer

var fence;
var insideFence = false;
let showBG = false
let font; 

let now =[] 
let splitString= []
let posX, posY

let xoff = 0.0;

function preload() {
  font = loadFont("js/classicsansroman.otf");
  img = loadImage('js/no_content.jpeg');
}

function setup() {
	createCanvas(895, 1280)
	pixelDensity(1)
	
	fence = new geoFenceCircle( 59.829081,22.959678, 0.02, onEnterFence, onLeaveFence, 'mi')

	posterLayer = createGraphics(width, height, P2D, document.getElementById('canvas'))
	
	//txts = posterTxt.split('\n\n')
	// print(txts.length)
	//textSize(100);
	//textAlign(CENTER, CENTER);
	//textAlign(CENTER, CENTER);
	//posterLayer.textFont(font);
	//posterLayer.textSize(100);
	//posterLayer.fill(255,0,0);
  //posterLayer.text("hello world", width/2, height/2)
	
	
}

function draw() {
//background(random(255))
	posterLayer.now = new Date();

posterLayer.background(255,30)

 xoff = xoff + 0.01;
  let n = noise(xoff) * posterLayer.width;



  if( fence.insideFence ){
  	posterLayer.fill(0,255,0);
    posterLayer.text( 'Inside fence', 50, 100 );
    //posterLayer.fill(255,0,0);
    //posterLayer.ellipse(posterLayer.n, height/2, 100,100)


//poster start


   posterLayer.push()
  posterLayer.scale(6)
  
  posX = 50
  posY= 140
  
  //rotate(radians(mouseX))
  //rotate(radians(90))
   posterLayer.push() 
  posterLayer.fill(0)
   posterLayer.translate(posX,posY)
  
  posterLayer.rotate(sin(frameCount%1000*.005))
  posterLayer.noStroke()
  posterLayer.arc(0, 0, 860, 860, 0, PI * 0.75);
  posterLayer.noStroke()
  posterLayer.fill(255)
  posterLayer.ellipse(0,0, 465,465 )
  posterLayer.pop()
  
    posterLayer.push()
  posterLayer.fill(0)
   posterLayer.translate(posX,posY)
  posterLayer.noStroke()
  posterLayer.rotate(nfp(HALF_PI+(sin(frameCount%1200*.01))+10))
  posterLayer.arc(0, 0, 463, 463, 0, PI * .80);
  posterLayer.noStroke()
  posterLayer.fill(255)
  posterLayer.ellipse(0,0, 270,270 )
  posterLayer.pop()
  
  posterLayer.push()
  posterLayer.fill(0)
   posterLayer.translate(posX,posY)

  posterLayer.rotate(nfp(HALF_PI+(sin(frameCount%2500*.009))+10))
  posterLayer.noStroke()
  posterLayer.arc(0, 0, 268, 268, 0, PI * .85);
  posterLayer.noStroke()
  posterLayer.fill(255)
  posterLayer.ellipse(0,0, 165,165 )
  posterLayer.pop()
  
  posterLayer.push()
  posterLayer.fill(0)
  posterLayer.translate(posX,posY)
  posterLayer.rotate(nfp(sin(frameCount%2000*.004)))
  posterLayer.noStroke()
  posterLayer.arc(0, 0, 163, 163, 0, PI * frameCount%2000*.002);
  posterLayer.noStroke()
  posterLayer.fill(255)
  posterLayer.ellipse(0,0, 130,130 )
  posterLayer.pop()

  posterLayer.push()
  posterLayer.fill(0)
  posterLayer.translate(posX,posY)
  posterLayer.rotate(sin(frameCount%3000*.001))
  posterLayer.noStroke()
  posterLayer.arc(0, 0, 128, 128, 0, PI * frameCount%5000*.004);
  posterLayer.noStroke()
  posterLayer.fill(255)
  posterLayer.ellipse(0,0, 105,105 )
  posterLayer.pop()
  
	posterLayer.push()
  posterLayer.fill(0)
  posterLayer.translate(posX,posY)
  posterLayer.rotate(sin(frameCount%2000*.009))
  posterLayer.noStroke()
  posterLayer.arc(0, 0, 103, 103, 0, PI * frameCount%4000*.002);
  posterLayer.noStroke()
  posterLayer.fill(255)
  posterLayer.ellipse(0,0, 90,90 )
  posterLayer.pop()

	posterLayer.push()
  posterLayer.fill(0)
  posterLayer.translate(posX,posY)
  posterLayer.rotate(sin(frameCount%3000*.011))
  posterLayer.noStroke()
  posterLayer.arc(0, 0, 88, 88, 0, PI * frameCount%4000*.002);
  posterLayer.noStroke()
  posterLayer.fill(255)
  posterLayer.ellipse(0,0, 80,80 )
  posterLayer.pop()
  
  posterLayer.pop()
  
 
  
  posterLayer.push()
  posterLayer.translate(width*.85, sin(frameCount%2000*.002)* (height*.91))
  posterLayer.rotate(radians(-90))
  posterLayer.textSize(45)
  posterLayer.blendMode(DIFFERENCE)
  posterLayer.fill(0)
  posterLayer.text("Premiär 25.05.2023", 0, 0, 500,100)
  //console.log(sin(frameCount%2000*.002)* (height*.98))
  posterLayer.pop()

 // fill(255)
 // rect(0,height*.888, width*.85, 4)
 // rect(0,height*.898, width*.85, 2)

  posterLayer.push()
  posterLayer.translate(50, 130)
  posterLayer.rotate(radians(0))
  posterLayer.textSize(25)
  //textAlign(RIGHT)
  posterLayer.fill(0)
  
  posterLayer.splitString = split(String(posterLayer.now), ' G');
  //posterLayer.text(posterLayer.splitString[0], 0, 30);
  posterLayer.text(posterLayer.splitString[0], posterLayer.width*.1, posterLayer.height*.6);
  //text(now, 0, 0, 800,100)
  //split(now, ' ');
  
  //text(frameCount%200, 0, 0, 100,100)
  //console.log(now)
  posterLayer.pop()   

//poster  end

  	posterLayer.fill(0,255,0);
    posterLayer.text( 'Inside fence', 50, 100 );


  } else {


  	posterLayer.fill(255,0,0);
  	posterLayer.textSize(25)
    posterLayer.text( 'Outside the fence', 50, 100 ); 
    posterLayer.fill(0);
    //posterLayer.rect(n, n, 100,100);
    posterLayer.imageMode(CENTER)
    posterLayer.image(img, n+100, n+100, img.width, img.height);
  }
//fill(255)
 //posterLayer.clear();
 //background(0)

  

  // posterLayer.push();

  // posterLayer.noFill();

  // posterLayer.stroke(255);
  // //posterLayer.translate();
  // posterLayer.rotateY(0.01 * frameCount);
  // posterLayer.sphere(300);

  // posterLayer.pop();

 // posterLayer.push();
 // posterLayer.translate(0, -width/2, 0);
 //  posterLayer.rotateY(0);

 // posterLayer.pop();
  //posterLayer.translate(0,height/2,0);
 //translate(0, 0, 0);
 
 

  
  image(posterLayer, 0, 0, posterLayer.width*1.2, posterLayer.height*1.2);

//text("hello world", random(0, width), random(0, height), 500, 500)
  	
	//posterLayer.image(get(0, 0, width, height), 0, 0, posterLayer.width, posterLayer.height)
}



function onEnterFence(){
  if( insideFence === false ){
    insideFence = true;
    // code here will only run once when the user enters the geofence
    console.log( 'You have just gone inside the geofence' );    
  }
  console.log( 'You are inside the geofence' );
}
  
function onLeaveFence(){
  if( insideFence === true ){
    insideFence = false;
    // code here will only run once when the user leaves the geofence
    console.log( 'You have just left the geofence' );
  }
  console.log( 'You are outside the geofence' );
}