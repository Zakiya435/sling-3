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
var Score = 0;
function preload(){
  polygon_img=loadImage("polygon.png");
  //ball_img = loadImage("ball.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(340,230,120,10);
  stand2 = new Stand(50,230,120,10);
  stand3 = new Stand(195,330,120,10); 

  //one
  block1 = new Block(310,200,40,50);
  block2 = new Block(345,200,40,50);
  block3 = new Block(380,200,40,50);
  block4 = new Block(330,150,40,50);
  block5 = new Block(365,150,40,50);
  //two
  block6 = new Block(20,200,40,50);
  block7 = new Block(55,200,40,50);
  block8 = new Block(90,200,40,50);
  block9 = new Block(40,150,40,50);
  block10 = new Block(75,150,40,50);
  //three
  block11 = new Block(160,300,40,50);
  block12 = new Block(195,300,40,50);
  block13 = new Block(230,300,40,50);
  block14 = new Block(180,250,40,50);
  block15 = new Block(215,250,40,50);
  
  //ball
  ball = Bodies.circle(50,50,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:50,y:50});

}
function draw() {
  background(0,0,0);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + Score, width-300, 50)
  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  fill(48, 255, 217);
  block1.display();
  block6.display();
  block11.display();
  fill(251, 122, 39);
  block2.display();
  block7.display();
  block12.display();
  fill(210, 58, 244);
  block3.display();
  block8.display();
  block13.display();
  fill(247, 231, 108);
  block4.display();
  block9.display();
  block14.display();
  fill(242, 89, 127);
  block5.display();
  block10.display();
  block15.display();
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  block1.score();
  
  block2.score();
  
  block3.score();
  
  block4.score();

  block5.score();

  block6.score();
 
  block7.score();

  block8.score();
 
  block9.score();
 
  block10.score();

  block11.score();
 
  block12.score();
 
  block13.score();
 
  block14.score();
 
  block15.score();
  console.log(Score);


}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed()
{ if(keyCode === 32)
  { 
    slingShot.attach(this.ball); 
  } 
} 