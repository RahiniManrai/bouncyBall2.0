const Engine= Matter.Engine;
const World=Matter.World
const Bodies=Matter.Bodies
var engine, world, ground, ball;


function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world
 var groundoption={
 isStatic:true
  }

  var balloption={
 restitution:1

  }

  var ball2option={
    restitution:2
   
     }

     var ball3option={
      restitution:3
     
       }
 ground=Bodies.rectangle(400, 390, 800, 20, groundoption);
 World.add(world, ground);

 ball=Bodies.circle(400, 200, 40, balloption);
 World.add(world, ball)

 ball2=Bodies.circle(500, 200, 60, ball2option);
 World.add(world, ball2)

 ball3=Bodies.circle(600, 200, 30, ball3option);
 World.add(world, ball3)


}

function draw() {
  background(25,15,55); 
  Engine.update(engine); 
  rectMode(CENTER);
  fill("green")
  rect(ground.position.x, ground.position.y, 800, 20);
  ellipseMode(CENTER);
  fill("red");
  ellipse(ball.position.x, ball.position.y, 40, 40)
  fill("pink")
  ellipse(ball2.position.x, ball2.position.y, 60, 60)
  fill("yellow")
   ellipse(ball3.position.x, ball3.position.y, 30, 30)
  
  
}