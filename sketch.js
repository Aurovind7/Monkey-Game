var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, groundImage
var score = 0

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  ground = createSprite(200, 350, 800, 20);
  ground.shapeColor = "grey"
  ground.velocityX = -4
  monkey = createSprite(100, 325, 20, 20)
  monkey.addAnimation("monkey running", monkey_running)
  monkey.scale = 0.1

  FoodGroup = new Group();
  obstacleGroup = new Group()

}


function draw() {
  background("white")
  if (ground.x < ground.width / 2) {
    ground.x = 200

  }
  text("Survival Time: " + score, 170, 40)
  monkey.collide(ground)
  monkey.velocityY = monkey.velocityY + 0.8
  if (keyDown("space")) {
    monkey.velocityY = -12

  }

  if (frameCount % 80 === 0) {
    bananaFunction();


  }
  if(frameCount%300===0){
    obstacleFunction();
    
    
  }

  if (FoodGroup.isTouching(monkey)){
    
    FoodGroup.destroyEach();
    
    
  }
  
    
  score =Math.ceil(frameCount/frameRate());



    drawSprites();
}

function bananaFunction() {
  r = Math.round(random(120, 200))
  banana = createSprite(400, r, 20, 20)
  banana.addImage(bananaImage)
  banana.velocityX = -4
  banana.scale = 0.1
  banana.lifetime = 110
  FoodGroup.add(banana)

}

function obstacleFunction(){
  obstacle=createSprite(400,313,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-6
  obstacle.scale=0.15
  obstacle.lifeTime=100
  obstacleGroup.add(obstacle)
  
  
  
  
}



