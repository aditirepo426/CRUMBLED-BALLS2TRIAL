class Paper {
    constructor(x,y,radius){
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x,this.y,radius/2,options);
    this.radius = radius;
    this.image = loadImage("images/paperwh.jpg");
    World.add(world,this.body);
    
} 
display(){
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    ellipse(0,0,this.radius,this.radius);
    imageMode(CENTER);
    image(this.image,300,100,100,100);
    pop();

}
};


