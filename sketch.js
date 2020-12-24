const Engine=Matter.Engine;
const World = Matter.World ;
const Body = Matter.Bodies;
var engine,world;

function setup() {
  createCanvas(800,400);
   
engine=Engine.create();
world=engine.world;
ground =new Ground(600,600,1200,20);
}

function draw() {
  background(255,255,255);  
Engine.update(engine);
ground.display();
}