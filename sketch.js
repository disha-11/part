var mom1, mom2, mom1i, mom2i;
var   colorPicker, form,game,player;
var boy, boy1,girl,girl1,man,man1,women,women1;
var brother,brother1,father,father1,grandma,grandma1,grandpa,grandpa1,mother,mother1,sister,sister1;
var database;
var gameState=0;
function preload(){
mom1i=loadImage("images/moms ear img 1.png");
mom2i=loadImage("images/moms ear1.png");
boy1=loadImage("images/boy.png");
man1=loadImage("images/man.png");
girl1=loadImage("images/girl.png");
women1=loadImage("images/women.png");
father1=loadImage("images/father.png");
mother1=loadImage("images/mother.png");
sister1=loadImage("images/sister.png");
brother1=loadImage("images/brother.png");
grandma1=loadImage("images/grandma.png");
grandpa1=loadImage("images/grandpa.png");

}

function setup(){
createCanvas(displayWidth,displayHeight);
database=firebase.database();
mom1=createSprite(displayWidth/2,displayHeight/2-250,10,10);
mom1.addImage(mom1i);
mom1.scale=0.7;
mom2=createSprite(displayWidth/2-50,displayHeight/2+20,10,10)
mom2.addImage(mom2i);
mom2.scale=0.5;


colorPicker = createColorPicker("#B3F3F5");
colorPicker.position(displayWidth/2+680,displayHeight/2+400);

game=new Game();
game.start();
}

function draw(){
background(colorPicker.color());

  drawSprites();
 
}
