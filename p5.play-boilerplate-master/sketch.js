var car,wall,speed,weight;



function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(100,200,80,40);
  car.velocityX = speed;

  wall = createSprite(1300,200,50,200);
  wall.shapeColor = color(30,50,190);

  
}

function draw() {
  background(255,100,20);  

  if(wall.x - car.x < car.width/2 + wall.width/2){
    var deform =0.5 * weight * speed * speed/22500;

    if(deform > 180){
      car.shapeColor = color(255,0,0);
    }
     if(deform < 180 && deform > 100){
      car.shapeColor = color(200,200,0);
    }
    if(deform < 100 ){
      car.shapeColor = color(0,255,0);
    }

  }
  drawSprites();
}