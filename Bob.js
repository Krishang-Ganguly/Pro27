class Bob {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density:1.2,
            isStatic:false
        }
        this.r = 20;
        this.body = Bodies.circle(x, y, this.r, options);
        
        
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};