class Player {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/player.png");
        World.add(world,this.body);
    }

    display() {
        var posx = this.body.position.x;
        var posy = this.body.position.y;
        //var angle =  this.body.angle;

        push ();
        translate(posx,posy);
        //rotate(angle);
        imageMode (CENTER);
        image (this.image,0,0,this.width,this.height);
        pop ();
    }
}