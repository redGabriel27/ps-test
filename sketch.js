var costas1;
let p = "0"
let costa2;
let situacao = "olhando";
let farra1;
let farra2;
let olhando;
let gameover;
let quieto;
let proximaAlteracao = 0;
let giz,grito;
const CADEIRAS_Y = 460;
let estaBaguncando = false
function preload() {
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
  olhando = loadImage("olhando.jpg");
  gameover = loadImage("gameover.jpg")
  
  giz = loadSound("giz.mp3")
  giz.setLoop(true)
  grito = loadSound("grito.mp3")
  grito.setLoop(true)
}

function setup() {
  createCanvas(1024, 576);
}

function troca(){
  if(situacao == "olhando"){
    situacao = "nao olhando";
    giz.play();
  } else{
    situacao = "olhando";
    giz.pause();
  }
  proximaAlteracao = millis() + random(2500, 7000)
}

function draw() {
  
  if(millis() > proximaAlteracao){
    troca();
  }
  
  if(situacao === "olhando"){
    image(olhando,0, 0);
  } else {
      let tempo = millis() % 1000
  if(tempo > 500) {
    image(costas2,0, 0);
  } else {
    image(costas1,0,0);
  }
  }
  
  fill("rgb(122,223,122)");
  textSize(32);
  text(p ,10, 30);
  
  
  if(mouseIsPressed || touches.length > 0 || keyIsPressed) {
     p++
    if(estaBaguncando == false){
      grito.play();
      estaBaguncando = true
    }
    
    
        if(situacao === "olhando"){
          image(gameover, 0, 0);
          fill("rgb(214,0,0)");
          textSize(32);
          p = "Pontos: "+p;
          textAlign(CENTER,CENTER);
          text(p ,width/2, height/2+ 60);
          noLoop()
          giz.stop();
          grito.stop();
          
          textSize(64);
          fill("red");
          textAlign(CENTER,CENTER);
          text("GAME OVER", width/2, height/2);
          
    } 
    
    let tempo = millis() % 800;
    if (tempo > 400){
        image(farra1, 50, CADEIRAS_Y, 100, 160, 180, 100, 450, 720)
    } else {
        image(farra2,50,CADEIRAS_Y, 100, 160, 180, 100, 450,720)
    }
    
        tempo = millis() % 1200;
    if (tempo > 400){
        image(farra1, 150, CADEIRAS_Y, 100, 160, 180, 100, 450, 720)
    } else {
        image(farra2,150,CADEIRAS_Y, 100, 160, 180, 100, 450, 720)
    }
    
        tempo = millis() % 900;
    if (tempo > 450){
        image(farra1, 250, CADEIRAS_Y, 100, 160, 180, 100, 450,720)
    } else {
        image(farra2,250, CADEIRAS_Y, 100, 160, 180, 100, 450,720)
    }
    
  } else{grito.pause(); estaBaguncando = false
        
  image(quieto, 50, CADEIRAS_Y, 100, 160, 180, 100, 450, 720)
  image(quieto, 150, CADEIRAS_Y, 100, 160, 180, 100, 450, 720)
  image(quieto, 250, CADEIRAS_Y, 100, 160, 180, 100, 450, 720)
         
        }
  
}