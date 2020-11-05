class Bob{
    constructor(x, y, radius){
        var options ={
            restitution:1.2,
            friction: 1.2,
            density:0.8
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(2);
        fill(255,0,255);
        ellipse(pos.x, pos.y, this.radius);
    }
}