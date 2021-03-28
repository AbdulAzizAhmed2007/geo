const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane;
var hammer;
var rubber;
var stone;
var rubber1;
var stone1;
var stone2;
var stone3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(700,300,100,50);
    stone = new Stone(600,300,20,20);

    rubber1 = new Rubber(500,300,50,50);
    stone1 = new Stone(400,300,10,20);
    stone2 = new Stone(300,300,10,20);
    stone3 = new Stone(300,300,10,20);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    rubber1.display();
    stone1.display();
    stone2.display();
    stone3.display();
    
 
}