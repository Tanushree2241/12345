const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine , myWorld , box1 , box2 , ground1 , pig1 , log1 , pig2 , log2 , box3 , box4 , box5 , log3 , log4 , bird1;
var backgroundImg,platform,slingshot,constrainedLog;

function preload() {
   backgroundImg = loadImage("Sprites/bg.png");
}


function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);
   myEngine = Engine.create();
   myWorld = myEngine.world;
   box1 = new box (700,320,70,70);
   box2 = new box (920,320,70,70);
  ground1 = new ground (600,390,1200,20);
  pig1 = new pig (810,350);
  log1 = new log (810,260,300,PI/2);
  box3 = new box (700,240,70,70);
  box4 = new box (920,240,70,70);
  pig2 = new pig (810,220);
  log2 = new log (810,180,300,PI/2);
  box5 = new box (810,160,70,70);
  log3 = new log (730,100,150,PI/7);
  log4 = new log (910,120,150,-PI/6);
  bird1 = new bird (100,100);
  platform = new ground(100,250,500,290);
 // constrainedLog = new log(230,180,80,PI/2);
  slingshot = new SlingShot (bird1.body,{x:200,y:100});
}

function draw() {
  background(backgroundImg); 
  box1.display();
  ground1.display();
 box2.display();
 pig1.display();
 log1.display();
 box3.display();
 box4.display();
 pig2.display();
 log2.display();
 log3.display();
 log4.display();
 pig2.display();
 box5.display(); 
 bird1.display();
 platform.display();
// constrainedLog.display();
 //chain1.display();
 slingshot.display();
  Engine.update(myEngine);
  //drawSprites();
}

function mouseDragged () {
  Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});
} 

function mouseReleased () {
  slingshot.fly();
}