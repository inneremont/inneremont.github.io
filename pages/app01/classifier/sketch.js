let video;
let features;
let knn;
let labelP01,labelP02;
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
  createCanvas(displayWidth, displayHeight);
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


angleMode(DEGREES);
features = ml5.featureExtractor('MobileNet', modelReady);


labelP01 = createP(" "); 

//myDiv.style('color', '#ffffff');
//myDiv.position(0, 0);

  
labelP01.style("font-size","32pt"); 
labelP01.style("font-family", "Helvetica"); 
labelP01.style('color', '#000000');
labelP01.style('padding', '20px');
labelP01.position(displayWidth*.7, 10);
labelP01.style('transform', 'rotate(90deg)');

labelP02 = createP(" "); 
  
labelP02.style("font-size","10pt"); 
labelP02.style("font-family", "Helvetica"); 
labelP02.style('text-align', 'justify');
labelP02.style('text-justify', 'inter-word');
labelP02.style('line-height', '1.5');
labelP02.style('padding', '10px');
labelP02.style('color', '#000000');
labelP02.style('transform', 'rotate(90deg)');
//text-justify: inter-word;
//text-align: justify;
//padding: 50px;
//line-height: 1.6;
labelP02.position(0, 0);  
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
  KNNdescr = "item01"
  description = text01
} 
else if (KNNresult == 3)
{
  KNNdescr = "item02"
  description = text02
      push();

  pop();
} 
else if (KNNresult == 4)
{
  KNNdescr = "item03"
  description = text03
}
else if (KNNresult == 5)
{
  KNNdescr = " item04"
  description = text04
  push();
 
pop();
}
else if (KNNresult == 6)
{
  KNNdescr = "item05"
  
  description = text05
}
else if (KNNresult == 7)
{
  KNNdescr = "item06"
  description = text06
  //  push();
	//imageMode(CENTER);
	//image(sampleImg, displayWidth/2, displayHeight*.7, sampleImg.width/2,sampleImg.height/2);
  //pop();
}
else if (KNNresult == 8)
{
  KNNdescr = "item07"
  description = text07
}
else if (KNNresult == 9)
{
  KNNdescr = "item08"
  description = text08
}
else if (KNNresult == 10)
{
  KNNdescr = "item09"
  description = text09
}
else if (KNNresult == 11)
{
  KNNdescr = "item10"
  description = text10
}
else if (KNNresult == 12)
{
  KNNdescr = "item11"
  description = text12
}
else if (KNNresult == 13)
{
  KNNdescr = "item12"
  description = text13
}
else if (KNNresult == 14)
{
  KNNdescr = "item13"
  description = text14
}
else if (KNNresult == 15)
{
  KNNdescr = "item14"
  description = text14
}
else if (KNNresult == 16)
{
  KNNdescr = "item15"
  description = text15

}

else if (KNNresult == 17)
{
  KNNdescr = "item16"
  description = text16

}





labelP01.html(KNNresult + KNNdescr);
//labelP02.html(description);
//translate(displayWidth*.70,10)
push();
textSize(14);
textLeading(18);
//rotate(90);
fill(0);
text(description,0,0,290,300);
pop();

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

