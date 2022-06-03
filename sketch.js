
var trex ,trex_running;
var ground;

//Everything that needs to load goes in here
function preload(){
  //T-Rex running animation
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

//All setup goes here
function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  //Setting the moving animation
  trex.addAnimation("running", trex_running);
  //Reduce the size of the T-Rex images
  trex.scale = 0.7;
  //Create a ground sprite
  ground = createSprite(200, 180, 400, 20);
 
}

//Everything here keeps repeating
function draw(){
  //Clears the background, keeping it white
  background("white")
  
  //This is so the T-Rex stays above the ground instead of inside it or under it
  trex.collide(ground);

  //Setting up the "space" button to do something
  if(keyDown("space")){
     trex.velocityY=-10;
  }
  
  //Making it so when the T-Rex jumps it goes back down
  trex.velocityY = trex.velocityY+0.8

  //Calling in all the sprites into the actual game
  drawSprites();
}
