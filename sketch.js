const Engine = Matter.Engine;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000, 400);
  box1 = new Box(700, 350, 50, 50)
  box2 = new Box(700, 350, 50, 50)
  box3 = new Box(700, 350, 50, 50)
  box4 = new Box(700, 350, 50, 50)
  box5 = new Box(700, 350, 50, 50)
  box6 = new Box(700, 350, 50, 50)
  ball = new Ball(450,200,50);
  rope1 = new rope(ball.body,{x:620,y:150})
  ground = new Ground(500, 400, 1000, 20);
  Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background("blue");
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  rope1.display();
  drawSprites();
}


function mouseDragged()
{
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
   rope1.fly();
}
