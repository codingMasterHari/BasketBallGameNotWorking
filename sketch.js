const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var groundObj, garbageObj, paperObj, bgImg, garbagebinActual, restartButtonImg, restartButton;
const bgSound  = new Audio("bgSound.wav");
bgSound.volume = 0.5

function preload() {
    bgImg = loadImage("basketballImg.png");
    restartButtonImg = loadImage("restartButton.png");
}

function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;

    paperObj = new Ball(215, -100, 32);
    garbageObj = new Hoop(1230, 350);
    groundObj = new Ground(width/2, height-17, width, 12);
    garbagebinActual = new GarbageCan(1230, 668);

    restartButton = createSprite(300, 500, 50, 50);
    restartButton.addImage(restartButtonImg);
    // restartButton.scale = 5;
    // restartButton.visible = true;

}

function draw() {
    background(bgImg);
    Engine.update(engine);
    
    bgSound.play();
    bgSound.loop = true;


    groundObj.display();
    paperObj.display();
    garbageObj.display();
    garbagebinActual.display();

    drawSprites();

}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 8.5, y: -15});
    }
}