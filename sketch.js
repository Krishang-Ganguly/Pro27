
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	roof = new Roof(350,100,200,20);

	
	bobObject1 = new Bob(280,300)
	bobObject2 = new Bob(315,300)
	bobObject3 = new Bob(350,300)
	bobObject4 = new Bob(385,300)
	bobObject5 = new Bob(420,300)
	
	rope1 = new Rope(bobObject1.body,roof.body,-33*2,0)
	rope2 = new Rope(bobObject2.body,roof.body,-16*2,0)
	rope3 = new Rope(bobObject3.body,roof.body,1*2,0)
	rope4 = new Rope(bobObject4.body,roof.body,18*2,0)
	rope5 = new Rope(bobObject5.body,roof.body,35*2,0)
	

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  rope1.show()
  rope2.show()
  rope3.show()
  rope4.show()
  rope5.show()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bobObject5.body, {x : bobObject5.body.position.x, y : bobObject5.body.position},
			{x : 0.5, y : -0.5})
	}

	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject5.body, {x : bobObject5.body.position.x, y : bobObject5.body.position.y},
			{x : -0.5, y : -0.5})
	}

}



