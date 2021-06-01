class Snow{
    constructor(x,y){
        var options ={
           restitution : 0.1,
           friction : 0.001,
           isStatic : false
        }

        this.snow = Bodies.circle(x,y,10,options);
        this.image = loadImage("snow5.webp");
        this.radius = 10;
        World.add(world,this.snow)

    }

    display(){
        var pos = this.snow.position;
        fill("white");
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.radius, this.radius);
        //ellipseMode(CENTER);
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        
    }

    //updating Y coordinate
    updateY(){
        if(this.snow.position.y > height){
            Matter.Body.setPosition(this.snow,{x : random(0,750),y : random(0,400)})
        }
    }


}