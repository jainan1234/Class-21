function setup() {
  createCanvas(800,400);
  p1 = createSprite(400, 200, 50, 50);
  p2 = createSprite(400, 200, 50, 50);
  
  thing1 = createSprite(100, 100, 25, 25)
  thing2 = createSprite(700, 100, 25, 25)
  
  thing1.velocityX = 7
  thing2.velocityX = -7
  edges = createEdgeSprites()
}

function draw() {
  background("lightblue");
  p1.x = mouseX
  p1.y = mouseY

  thing1.bounceOff(edges)
  thing2.bounceOff(edges)

  if(collision(p1, p2)) {
    p1.shapeColor = "green"
    p2.shapeColor = "green"
  }

  else {
    p1.shapeColor = "red"
    p2.shapeColor = "red"
  }

  if(collision(thing1, thing2)) {
    thing1.visible = false
    thing2.visible = false
  }

  else {
    thing1.visible = true
    thing2.visible = true
  }

  
  drawSprites();
}




