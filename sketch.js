
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options= {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER)
	ground = new Ground(400, 675, 800, 50)
	leftSide = new Ground(600, 600, 15, 100)
	rightSide = new Ground(450, 600, 15, 100)
	ball = new Ball(100, 150, 25)
	//Create the Bodies Here.
	Matter.Bodies.circle(200, 200, 25, ball_options)
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftSide.display()
  rightSide.display()
  ball.display()
  Engine.update(engine) 
  drawSprites();
	keyPressed()
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 85, y:-85})
	}

}


