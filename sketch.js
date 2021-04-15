const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(740,185,240,10)
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //level one
  box1=new Block(660,50,30,40)
  box2=new Block(690,50,30,40)
  box3=new Block(720,50,30,40)
  box4=new Block(750,50,30,40)
  box5=new Block(780,50,30,40)
  box6=new Block (810,50,30,40)

  //level two
  box7=new Block(690,30,30,40)
  box8=new Block(720,30,30,40)
  box9=new Block(750,30,30,40)
  box10=new Block(780,30,30,40)

  //level three
  box11=new Block(720,15,30,40)
  box12=new Block(750,15,30,40)

  ball= new Ball(100,100,50)

  sling =new slingshot(ball.body,{x:130,y:170})
}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand3.display()
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  box11.display()
  box12.display()
  fill("grey");
  block16.display();
 
 ball.display()
 sling.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly()
}

