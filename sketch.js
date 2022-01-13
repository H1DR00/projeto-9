var caixa
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200.50,50)
}

function draw() 
{
  

  if (keyIsDown(RIGHT_ARROW)) {
    background("red");
    caixa.position.x +=5
  }


  drawSprites()

}




