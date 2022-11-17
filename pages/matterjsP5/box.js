function Circle (x,y,r){
  var options ={
    friction: 0.1,
    restitution:0.6 
  }
this.body = Bodies.circle(x, y, r,options);

 // this.body.friction = 0;
  this.r = r;
  //this.w = w;
  //this.h = h; 
  
  World.add(world, this.body);
  
  this.isOffScreen = function (){
    let pos = this.body.position;
    return (pos.y > windowHeight + 100) 
    /*
    {
    return true; 
    } else { 
    return false; 
    }
    */
    


}
  
  this.removeFromWorld = function() {
    World.remove(world, this.body);
}
  
  this.show = function (){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
   // noStroke();
    fill(0);
  //  let words = ["B","u","t","k","a","n"]
    //var rand = words[(Math.random() * words.length) | 0]

    //text('H', 10, 30);
   // text(words[0], this.w,this.h)
    ellipse (0,0, this.r*2)
    pop();
    
   // rect(boxy.position.x, boxy.position.y, 80,80);

  } 
}