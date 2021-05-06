const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drops, world, engine, umbrella
var maxDrops = 100;
function preload(){
    createCanvas(500,900)
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    drops = []
    umbrella = new Umbrella(270, 270)
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drop(random(0,500), random(0, 500)))
    }
}

function draw(){
    background("white")
    Engine.update(engine);
    umbrella.display()
    for(var i = 0; i<maxDrops; i++){
        drops[i].display()
    }
}   

