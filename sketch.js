 var wall,thickness;
 var bullet,speed,weight;

 function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,20);
wall=createSprite(1550,200,60,height/2)
bullet.velocityX = speed;
thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2)
speed=random(223,321)
weight=random(30,52)
}
 function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/3){
    bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180)
    {
      bullet.shapeColor="yellow"
    
    }
    if (deformation>180 && deformation>100)
    {
      bullet.shapeColor="green"
    
    }
    if (deformation<100)
    {
      bullet.shapeColor="orange"
    
    }
    if (hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    
    if(damage>10)
    {
      wall.shapeColor="pink"

    }


    if(damage<10)
    {
      wall.shapeColor="blue"
    }
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}