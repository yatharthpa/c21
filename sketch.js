var a,b;
var car;
var wall;

function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b= createSprite(400,300,40,40);
 wall= createSprite(200,350,50,50);
a.shapeColor="red";
b.shapeColor="red";

car= createSprite(400, 350, 50, 50);

}

function draw() {
  background(255,255,255); 
  
  b.x=World.mouseX;
  b.y=World.mouseY;
 
  if(IsTouching(a,b)){
    
    car.shapeColor="black";
    }

    
  if(IsTouching(wall,b)){
    car.velocityX=-2;
  }
  BounceOff(wall,car);
  drawSprites();
}

function IsTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2 && obj2.y-obj1.y<obj2.height/2+obj1.height/2 && obj1.y-obj2.y<obj2.height/2+obj1.height/2 && obj2.x-obj1.x<obj2.width/2+obj1.width/2){
    return true;
  }
   else{
    return false;
   }
}
 
function BounceOff(obj1,obj2){
 if(obj1.x-obj2.x<obj2.width/2+obj1.width/2 && obj2.x-obj1.x<obj2.width/2+obj1.width/2){
   obj1.velocityX= obj1.velocityX* (-1);
   obj2.velocityX= obj2.velocityX* (-1);
 }
 if(obj2.y-obj1.y<obj2.height/2+obj1.height/2 && obj1.y-obj2.y<obj2.height/2+obj1.height/2){
  obj1.velocityY= obj1.velocityY* (-1);
  obj2.velocityY= obj2.velocityY* (-1);
 }
}