let video;
let features;
let knn;
let labelP01,labelP02, labelP00;
let ready = false;
let customFont;
let KNNresult;
let KNNdescr =[];
let description=[];
let text01 =[] 
let text02 =[]
let text03 =[]
let text04 =[]
let qrcode, sampleImg;
let icon01;


function preload(){

  customFont = loadFont('assets/fonts/classicsansroman.otf')

  text01 = loadStrings('assets/texts/text01.txt');
  text02 = loadStrings('assets/texts/text02.txt');
  text03 = loadStrings('assets/texts/text03.txt');
  text04 = loadStrings('assets/texts/text04.txt');
  text05 = loadStrings('assets/texts/text05.txt');
  text06 = loadStrings('assets/texts/text06.txt');
  text07 = loadStrings('assets/texts/text07.txt');
  text08 = loadStrings('assets/texts/text08.txt');
  text09 = loadStrings('assets/texts/text09.txt');
  text10 = loadStrings('assets/texts/text10.txt');
  text11 = loadStrings('assets/texts/text11.txt');
  text12 = loadStrings('assets/texts/text12.txt');
  text13 = loadStrings('assets/texts/text13.txt');
  text14 = loadStrings('assets/texts/text14.txt');
  text15 = loadStrings('assets/texts/text15.txt');
  text16 = loadStrings('assets/texts/text16.txt');
  //qrcode = loadImage('assets/images/frame.png');
  //sampleImg = loadImage('assets/images/sampleImg.jpeg');


}

function setup() {
  createCanvas(windowWidth, windowHeight);
	var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
    //video: {
      //facingMode: "user"
    //} 
  };

	
video=createCapture(constraints);
video.size(400, 400);
video.hide();
frameRate(10);

angleMode(DEGREES);
features = ml5.featureExtractor('MobileNet', modelReady);


	


	
	
	
labelP01 = createP(" "); 

//myDiv.style('color', '#ffffff');
//myDiv.position(0, 0);

  
labelP01.style("font-size","8vw"); 
labelP01.style("font-family", "Helvetica"); 
labelP01.style('color', '#000000');
labelP01.style('padding', '50px');
labelP01.position(0, windowHeight*.08);
//labelP01.style('transform', 'rotate(90deg)');

labelP02 = createP(" "); 
  
labelP02.style("font-size","5vw"); 
labelP02.style("font-family", "Times New Roman"); 
//labelP02.style('text-align', 'justify');
//labelP02.style('text-justify', 'inter-word');
labelP02.style('line-height', '1.5');
labelP02.style('padding', '50px');
labelP02.style('color', '#000000');
//labelP02.style('transform', 'rotate(90deg)');
//text-justify: inter-word;
//text-align: justify;
//padding: 50px;
//line-height: 1.6;
labelP02.position(0, windowHeight*.22);  
}


function goClassify(){
const logits = features.infer(video);
knn.classify(logits, function(error,result){

//background(255);
clear();

if (error){
console.error(error);
} 
else {
KNNresult = result.label;

//console.log(KNNresult);
if (KNNresult == 0){
  KNNdescr = ""
  description = ""

} 
else if (KNNresult == 1)
{
  KNNdescr = " "
  description = " "
    push();

} 
else if (KNNresult == 2)
{
  KNNdescr = "A workspace"
  description = text01
} 
else if (KNNresult == 3)
{
  KNNdescr = "Mixed media"
  description = text02
      push();

  pop();
} 
else if (KNNresult == 4)
{
  KNNdescr = "On drawing"
  description = text03
}
else if (KNNresult == 5)
{
  KNNdescr = " Working words"
  description = text04
  push();
 
pop();
}
else if (KNNresult == 6)
{
  KNNdescr = "On Hangö Tryckeri"
  
  description = text05
}
else if (KNNresult == 7)
{
  KNNdescr = "Fleamarket to letterpress"
  description = text06
  //  push();
	//imageMode(CENTER);
	//image(sampleImg, displayWidth/2, displayHeight*.7, sampleImg.width/2,sampleImg.height/2);
  //pop();
}
else if (KNNresult == 8)
{
  KNNdescr = "Svinstad"
  description = text07
}
else if (KNNresult == 9)
{
  KNNdescr = "Where do I sign?"
  description = text08
}
else if (KNNresult == 10)
{
  KNNdescr = "Screenprinting"
  description = text09
}
else if (KNNresult == 11)
{
  KNNdescr = "Proxemics Made Bare"
  description = text10
}
else if (KNNresult == 12)
{
  KNNdescr = "Art Direction"
  description = text11
}
else if (KNNresult == 13)
{
  KNNdescr = "Mixed Composition"
  description = text13
}
else if (KNNresult == 14)
{
  KNNdescr = "Type Design"
  description = text15
}
else if (KNNresult == 15)
{
  KNNdescr = "New elements"
  description = text14
}
else if (KNNresult == 16)
{
  KNNdescr = "Physical and digital"
  description = text16

}

else if (KNNresult == 17)
{
  KNNdescr = "Compositions"
  description = text12

}

push();
noStroke();
fill(0,255,0);	
icon01 = ellipse(100, 100, windowWidth*.1);
fill(0);
textFont('Helvetica');	
textAlign(LEFT);	
textSize(windowWidth*.09);
text("Annotations", 180, 55, 100, 100);
pop();


labelP01.html(KNNdescr);
labelP02.html(description);
//translate(displayWidth*.70,10)


goClassify();

}

});

}



function keyPressed(){
const logits = features.infer(video);
if (key == 'q') {

knn.addExample(logits, "canvas")
console.log("canvas")
} else if (key == 'w') {
console.log("trees")
knn.addExample(logits, "trees")

} else if (key == 'e') {
console.log("parking lot")
knn.addExample(logits, "parking lot")

}  else if (key == 'r') {
console.log("low bus-stop")
knn.addExample(logits, "low bus-stop")

}  else if (key == 't') {
console.log("icecream cone")
knn.addExample(logits, "icecream cone")

} else if (key == 's') {
//console.log("Geist und Psyche")
knn.save("model.json")

}


//console.log(logits)

}

function modelReady(){
  console.log('MobileNet loaded');
  knn = ml5.KNNClassifier();
  knn.load('assets/json/model.json', function(){
    console.log('KNN Data Loaded');
    goClassify();
  });


}

function draw() {
  //background(220);


/*
//image(video,0,0);

if (KNNresult == ""){
noStroke();
  noFill();
ellipse(10,10,20)
} else if (KNNresult == "item_01"){
  fill(0,255,0);
  ellipse(10,10,20)
}
else if (KNNresult == "item_02"){
  fill(0,0,255);
  ellipse(10,30,20)
  }
else if (KNNresult == "item_03"){
  fill(0,100,100);
  ellipse(10,50,20)
  }
else if (KNNresult == "item_04"){
  fill(255,0,0);
  ellipse(10,70,20)  
}

*/
/*  
if (!ready && knn.getNumLabels() > 0) {
goClassify();
  ready =true;
}  
*/ 
  

}

function keyPressed(){
  if(key == "f"){
    let fs = fullscreen();
    fullscreen(!fs);
  }
 }

