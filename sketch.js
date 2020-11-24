var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var survivalTime;

function preload(){
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {

  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
//monkey.debug=true; 
  
 ground = createSprite(400,350,900,10);
 ground.velocityX=-2;
 ground.x=ground.width/2;
 console.log(ground.x);
    
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {
background(255);
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if (keyDown("space")&& monkey.y>200) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
   
  monkey.collide(ground);
  
  //food();
 // Obstacle();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score, 500,50);
  
 // function food() {
 if(frameCount%80===0){ 
   banana = createSprite(400,200,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.velocityX=-6;
   banana.setLifetime=100;
   banana.scale = 0.1;
   bananaGroup.add(banana);
 }  
//}

//function Obstacle(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(600,315,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX=-6;
    obstacle.setLifetime=300;
    obstacle.scale = 0.2;
   obstacleGroup.add(obstacle);
  
 }

//}
 
  drawSprites(); 
}

