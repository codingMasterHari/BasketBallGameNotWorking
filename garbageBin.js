class Hoop {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dustbinWidth = 200;
		this.dustbinHeight = 213;
		this.wallThickness = 20;
		
		// this.image = loadImage("gBin.png");
                this.image = loadImage("basketballHoop.png")
		this.bottomBody = Bodies.rectangle(this.x, this.y+500, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/3, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/5, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display() {
                var posBottom = this.bottomBody.position;
                var posLeft = this.leftWallBody.position;
                var posRight = this.rightWallBody.position;



                push();
                translate(posLeft.x+20, posLeft.y);
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                rotate(this.angle)
                pop();

                push();
                translate(posRight.x-20, posRight.y);
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                rotate(-1*this.angle)
                pop();

                push();
                translate(posBottom.x, posBottom.y+10);
                rectMode(CENTER)
                angleMode(RADIANS)
                fill(255)
                imageMode(CENTER);
                image(this.image, 0,-this.dustbinHeight-500,this.dustbinWidth, this.dustbinHeight)
                pop();
			
	}

}