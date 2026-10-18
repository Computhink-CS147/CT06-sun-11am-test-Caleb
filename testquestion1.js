let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}
function draw(){
    background('lightblue');
    posX+=xSpeed;
    if(posX > width){
        xSpeed=xSpeed*-1;
    }
    if(posX<0){
        xSpeed=xSpeed*-1;
    }
    circle(posX,200,50);
}
