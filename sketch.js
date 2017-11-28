var value = 0;
var opacity = 255;

function preload() {
myLemon = loadImage("./assets/lemon.png");
myCucumber = loadImage("./assets/cucumber.png");
myApple = loadImage("./assets/apple.png");
myYogurt = loadImage("./assets/yogurt.png");
mySpinach = loadImage("./assets/spinach.png");
myGlass = loadImage("./assets/glass.png");}
    
function setup() {
    
createCanvas(windowWidth,windowHeight);
angleMode(DEGREES);
// by defaults equals to 30
setShakeThreshold(10);
frameRate(12);
    
}
                                         
function draw() {
    
background(255-value, 250-value, 200-value);
    push()
    tint(255, -opacity)
    imageMode(CENTER)
    image(myGlass,windowWidth/2,windowHeight-300,100,200)
    pop()
    push()
    tint (255, opacity)
    
    image(myLemon,30,windowHeight-100,40,50);
    image(myCucumber,75,windowHeight-100,70,50);
    image(myApple,150,windowHeight-100,50,50);
    image(myYogurt,205,windowHeight-100,50,50);
    image(mySpinach,260,windowHeight-100,50,50);
    pop()
    
fill(68, 102, 0);
textSize(30);
    textStyle (BOLD);
textFont('Amatic SC') ;
textAlign(CENTER);
text('shake your mobile to prepare your green smoothie!', width/2-155,height/2+70, 310)
    
}
                                        
function deviceShaken() {
  
opacity = opacity - 20;

value = value + 1;
if (value > 255) {
value = 0; }
                                        
}
