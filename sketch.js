var monkey,monkeyImg;
var banana,bananaImg;
var obstacle,obsacleImg;
var score;
var background;

function preload(){
bananaImg=loadImage("banana.png");
obstacleImg=loadImage("stone.png");
monkeyImg=loadImage("monkey_01.png","monkey_02.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_010.png");

}

function setup() {
  createCanvas(400, 400);
  monkey=createSprite(80,350,20,20);
  
  background=createSprite(400,400,400,400);
  backround.addImage("background",jungle.jpg);
  
}

function draw() {
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);


obstacleGroup=new Group();

if(obstacleGroup.istouching(monkey)
   monkey.scale =0.2;
   

switch(score){
    case 10:monkey.scale=0.12;
    case 20:monkey.scale=0.14;
    case 30:monkey.scale=0.16;
    case 40:monkey.scale=0.18;
}


}


  