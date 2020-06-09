var gameState="one";
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	
	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    

	packageSprite=createSprite(width/2 ,80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    packageSprite.visible=false;
	
	groundSprite=createSprite(width/2, 680, width,60);
	groundSprite.shapeColor=color("green")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200 , 5 , {restitution:0.5,friction:100, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 100 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background(70,10,255);
  packageSprite.y= packageBody.position.y;	
  if (gameState=="one") {
	packageSprite.x= helicopterSprite.x;
  }
  
	
    if (keyWentDown(DOWN_ARROW)) {
	packageSprite.visible=true;
	Matter.Body.setStatic(packageBody,false);
	helicopterSprite.velocityX=10;
    gameState="two";
	}
	
	/*if (gameState="two") {
		packageSprite.x !== helicopterSprite.x;
	  }
	*/
	  if (keyWentDown ( RIGHT_ARROW)) {
    helicopterSprite.velocityX=3;
    }
	
	if (keyWentDown( LEFT_ARROW)) {
    helicopterSprite.velocityX=-3;
    }
	
	if (keyWentDown(UP_ARROW)) {
	helicopterSprite.velocityX=0;
    }
drawSprites();
} 

 

   
	








