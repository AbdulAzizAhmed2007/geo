class Stone{
    constructor(x,y,radius){
var options = {
    restitution:1,
    density:1,
    friction:1
}
this.body = Bodies.circle(x,y,radius,options)
this.radius = radius;
World.add(world,this.body); 
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("grey");
        ellipse(pos.x,pos.y,this.radius);
    }
}