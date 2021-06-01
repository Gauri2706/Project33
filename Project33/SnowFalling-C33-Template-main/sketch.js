const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;

var bg, bgImg;
var snow = [];
var maxSnow = 100;
var engine, world;

function preload(){
  bgImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  if(frameCount % 150 === 0){
    for(i = 0; i < maxSnow; i = i + 1){
      snow.push(new Snow(random(0,600),random(0,50)))
    }
  }  
}

function draw() {
  background(bgImg);
  
  Engine.update(engine);
  for(i = 0; i < maxSnow; i=i + 1){
    snow[i].display();
    snow[i].updateY();
  }
  drawSprites();
}