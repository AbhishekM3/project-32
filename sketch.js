const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function preload() {
 backgroundImg = loadImage("bg.png");

  getbg();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
      
  block8  = new Block(330,235,30,40);
  block9  = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16  = new Block(390,155,30,40);

  polygon= new Polygon(50,50,40);
  ground2 = new Ground(400,390,800,10)
  ground = new Ground(390,260,230,10);
  slingshot = new SlingShot(polygon.body,{x:50,y:100});
}

function draw() {
  if(backgroundImg);
  background(backgroundImg);
  Engine.update(engine);
 
  textSize(30);

  text("score: "+score,400,50);
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  slingshot.display();
  ground.display();
  ground2.display();   

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }
}

async function getbg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responsejson = await response.json();
  var datetime = responsejson.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>6 && hour<16){
      bg = "bg.png"
  }

  else{
      bg = "bg2.jpg"
  }

  backgroundImg = loadImage(bg);
}