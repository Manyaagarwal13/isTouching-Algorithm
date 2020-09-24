   var FR , MR ;

   function setup() {
  createCanvas(1200,800 );
   FR = createSprite(600, 400, 50, 80);
   FR.debug = true ;
   FR.shapeColor  = "green" ;
   MR= createSprite(400,200,80,30);
   MR.debug = true ;
   MR.shapeColor  = "green" ;
}

function draw() {
  background(0,0,0);  

  MR.x = World.mouseX ;
  MR.y = World.mouseY;

  if(MR.x - FR.x< FR.width/2 + MR.width/2 &&
    FR.x - MR.x< FR.width/2 + MR.width/2 &&
    MR.y- FR.y< FR.height/2 + MR.height/2&&
    FR.y- MR.y< FR.height/2 + MR.height/2){  
      MR.shapeColor = "red" ;
      FR.shapeColor = "red" ;
    }
    else{
      MR.shapeColor = "green" ;
      FR.shapeColor = "green" ;

    }
    

  drawSprites();
}