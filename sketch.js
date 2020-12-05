const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,50,250,20);

    bob1 = new Bob(100,300,20,20);
    bob2 = new Bob(450,300,20,20);
    bob3 = new Bob(500,300,20,20);
    bob4 = new Bob(550,300,20,20);
    bob5 = new Bob(600,300,20,20);
    
    rope1 = new Rope(bob1.body,{x:400,y:50})
    rope2 = new Rope(bob2.body,{x:450,y:50})
    rope3 = new Rope(bob3.body,{x:500,y:50})
    rope4 = new Rope(bob4.body,{x:550,y:50})
    rope5 = new Rope(bob5.body,{x:600,y:50})
    






}

function draw(){
    background("white");
    Engine.update(engine);

    ground.display();
  
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();





  
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY})
}
