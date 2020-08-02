var face1, face_running;
var face2, face2_running;
var face21, face21_running;
var face22, face22_running;
var face3, face3_running;
var face31, face31_running;
var face32, face32_running;

function preload(){ 
  face1_running = loadAnimation("mid.png");
  face2_running = loadAnimation("side2.png");
  face21_running = loadAnimation("side2.png");
  face22_running = loadAnimation("side2.png");
  
face3_running = loadAnimation("side2.png");
  face31_running = loadAnimation("side2.png");
  face32_running = loadAnimation("side2.png");
  
} 

function setup() { 
  createCanvas(500, 500); 
  
face1 = createSprite(251,237,40,40); 
face1.addAnimation("face1running",face1_running); 
face1.scale = 0.68;
  
  face2 = createSprite(333,199,40,40); 
face2.addAnimation("face2running",face2_running); 
face2.scale = 0.7;
  
  face21 = createSprite(333,263,40,40); 
face21.addAnimation("face21running",face21_running); 
face21.scale = 0.7;
  
  face22 = createSprite(333,325,40,40); 
face22.addAnimation("face22running",face22_running); 
face22.scale = 0.7;

face3 = createSprite(111,199,40,40); 
face3.addAnimation("face3running",face3_running); 
face3.scale = 0.7; 
  face31 = createSprite(111,263,40,40); 
face31.addAnimation("face31running",face31_running); 
face31.scale = 0.7;  
  face32 = createSprite(111,325,40,40); 
face32.addAnimation("face32running",face32_running); 
face32.scale = 0.7;  
} 

function draw() { 
  background("black"); 
  
  drawSprites(); 
}