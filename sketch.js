
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImage ;
var rect1 ,rect2,rect3,ground,paperObject;

function preLoad(){
	dustbinImage = loadImage("images/dustbin.jpg",dust);
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paperObject = new Paper(300,100,40);
	rect1 = new Dustbin (1100,575,20,100);
	rect2 = new Dustbin(1300,575,20,100);
	rect3 = new Dustbin(1200,635,200,20);
	console.log(paperObject);
	ground = new Ground(width/2,650,width,10);

	Engine.run(engine);
	
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	paperObject.display();
	rect2.display();
	
	ground.display();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 85,y: -85})
	console.log(paperObject.body);

	}
}



