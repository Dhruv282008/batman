class Drop{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            
        }
        this.body = Bodies.circle(x ,y ,5 ,options)
        World.add(world, this.body);
    }
    display(){
        if(this.body.position.y>900){
            Matter.Body.setPosition(this.body,{x:random(0,400), y:(0,400)})
        }
        ellipse(this.body.position.x, this.body.position.y,10,10)
       // drops.y = drops.y + 0.8
       console.log(this.body.position.y)
        
    }
}