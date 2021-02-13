const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}
function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	shelf = new Shelf(400,200,700,30);
	bobObject1 = new Ball(200,200);
	bobObject2 = new Ball(300,200);
	bobObject3 = new Ball(400,200);
	bobObject4 = new Ball(500,200);
	bobObject5 = new Ball(600,200);
	rope1 = new Rope(shelf.body,bobObject1.body);
	rope2 = new Rope(shelf.body,bobObject2.body);
	rope3 = new Rope(shelf.body,bobObject3.body);
	rope4 = new Rope(shelf.body,bobObject4.body);
	rope5 = new Rope(shelf.body,bobObject5.body);
	
	
	Engine.run(engine);
	
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  shelf.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


}



