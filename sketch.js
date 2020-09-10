const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinko=[];
var div=[];
var ballz=[];


var dh=300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,height,480,20);
//d1=new Div(200,200,10,10);
    p1=new P(100,200,10);
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var k=0; k<=width;k=k+80){
    div.push(new Div(k,height-dh/2,10,dh))
    
    
  }

  for(var k=0; k<div.length-1;k++){
    // var q=createSprite(k,height-dh/2,10,dh);
    div[k].display();
    
  }
   for(var j=40;j<=width;j=j+50){
    ballz.push(new D(j,75,10))
   }
   for(var j=15;j<=width;j=j+50){
    ballz.push(new D(j,175,10))

   }
  
   for(var j=40;j<=width;j=j+50){
    ballz.push(new D(j,275,10))   }

   for(var j=40;j<=width;j=j+50){
    ballz.push(new D(j,375,10))   }

   for(i=0;i<plinko.length;i++){
     plinko[i].display();
   }

   for(q=0;q<ballz.length;q++){
    ballz[q].display();
  }
   spawn();
ground.display();
//d1.display();
p1.display();
  drawSprites();
}

function spawn(){
if(frameCount%60==0){
  plinko.push(new P(random(width/2-10,width/2+10),10,10))

}
}