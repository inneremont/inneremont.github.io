var Engine = Matter.Engine,
  //    Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
   
let engine;
let circles = [];
let boundaries = [];
let world;
let ground;


function setup() {
    createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;  
   // Engine.run(engine); //depracated
  Matter.Runner.run(engine) //instead
 // World.add(world, boxy);
  boundaries.push(new Boundary(width*.4, windowHeight*.3, windowWidth/2, 60, 0.3));
  
    boundaries.push(new Boundary(width*.6, windowHeight*.7, windowWidth/2, 60, -0.3));
  


  //World.add(world, ground);

  // box1 = new Box(200, 100, 50,50);
  //  console.log(boxy);
}

function mouseDragged(){
  
     circles.push(new Circle(mouseX, mouseY, 10));
    //note new box
}

function draw() {
    background(255,220,0);
  for (let i = 0; i <circles.length; i++){
     circles[i].show();
    if (circles[i].isOffScreen()){
        circles[i].removeFromWorld();
        circles.splice(i,1);
    
      i--;
}
}
  for (let i = 0; i<boundaries.length; i++) {
  boundaries[i].show();
}


   // rect(boxy.position.x, boxy.position.y, 80,80);
    
}
