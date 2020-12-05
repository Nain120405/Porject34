class Bob{
    constructor(x,y,width,height){
        var options={
            'frictionAir':0.03,
            'density':1
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 40;
        this.height = 40;
        World.add(world,this.body)



    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("blue");
        fill("purple");
        ellipse(0,0,this.width,this.height);
        pop();



    }


}