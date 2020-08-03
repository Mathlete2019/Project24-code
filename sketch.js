
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,engine,world,bottomRed,rightRed,leftRed,ground,bottom,right,left,trashImage,trash;
function preload()
{
	trashImage=loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,100);
	ground = new Ground(0,380);
	ground.shapeColor="blue";
	bottom= new Red(100,650,200,20);
	bottom.shapeColor="green";
	right=new Red(800,610,20,100);
	left = new Red(500,610,20,100);
	trash=createSprite(100,100);
	trash.addImage("trash",trashImage);
	//paper.shapeColor="white";

	//bottomRed = createSprite(600,650,200,20);
	//rightRed = createSprite(700,610,20,100);
	//leftRed = createSprite(500,610,20,100);

	

	

	
	
	Engine.run(engine);
  
} 


function draw() {
	//Engine.update(engine);
	background(0);
	  rectMode(CENTER);
	  //rect(ground.position.x,ground.position.y,800,10)
  console.log(paper);
	
	
	//ground.shapeColor="blue";
	  drawSprites();
	  keyPressed();
	paper.display();
	ground.display();
	bottom.display();
	right.display();
	left.display();
	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5,y:-10});
		
		//paper.velocityY=-5;

	}
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:0});
		
		//paper.velocityY=-5;

	}

}

