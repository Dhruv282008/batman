class Umbrella {
    constructor(x, y){
        this.body = Bodies.circle(x, y, 50)
        this.image = loadImage("Walking Frame/walking_1.png")
        

    }
    display(){
       
        push()
        //translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER)
        image(this.image, this.body.position.x,this.body.position.y, 300, 300)
        pop()
        console.log(this.image)
    }
}