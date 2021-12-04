var box = createSprite(200,200,100,100);
box.shapeColor = "red";

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
    background("yellow");
  }
 drawSprites();
}