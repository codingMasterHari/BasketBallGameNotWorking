class Ball {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0,
      density: 0.1
    }
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    // this.image = loadImage("cPaperMain.png");
    this.image = loadImage("basketballMain.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    // var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    // rotate(angle);
    fill("black");
    ellipseMode(RADIUS);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r+30, this.r+30);
    pop();
  }
};

