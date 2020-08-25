
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var groundSprite;
var dropzone1,dropzone2,dropzone3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options =
    {
       isStatic:false,
	   restitution:0.3,
	   friction:0.5,
	   density:1.2
	}
	
	var ground_options =
    {
        isStatic: true
    }


	
	paperball=Bodies.circle(200,100,20,ball_options);
	fill ("red");
	World.add(world,paperball);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red")
	
	dropzone1 = createSprite(300,645,10,55);
	dropzone2 =  createSprite(500,645,10,57);
	dropzone3=createSprite(405,665,155,10);

	dropzone1.shapeColor=color("red")
    dropzone2.shapeColor=color("red")
	dropzone3.shapeColor=color("red")


  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  rect(groundSprite.position.x,groundSprite.position.y,400,20);

  

  ellipseMode(RADIUS);
  ellipse(paperball.position.x,paperball.position.y,10,10);

 
  keyPressed();
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
     Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
  }
}



