class PlayerBase {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        this.image = loadImage ("assets/base2.png");

        World.add(world,this.body);
    }

    display(){
        var pos1 = this.body.position.x;
        var pos2 = this.body.position.y;
        var angle = this.body.angle;

        push();
        translate(pos1,pos2);
        rotate(angle);
        imageMode (CENTER);
        image (this.image,0,0,this.width,this.height);
        pop ();
    }
}