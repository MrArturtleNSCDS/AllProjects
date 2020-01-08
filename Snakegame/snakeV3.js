var canv;
var ctx;

var playerX=10;
var playerY=10;
var gs=10;
var totalCols;
var totalRows;
var appleX;
var appleY;
var xDirection=0;
var yDirection=0;
var trail=[];
var snakeColors=[];
var tail = 0;
var firstTime = true;
var speed = 10;
var snakeInterval;


window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    totalCols=canv.width/gs;
    totalRows=canv.height/gs;
    document.addEventListener("keydown",keyPush);
    snakeInterval = setInterval(game,1000/speed);
    //game();
};

function game() {
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    
    playerX+=xDirection;
    playerY+=yDirection;
    if(playerX<0) {
        playerX=totalCols-1;
    }
    if(playerX>totalCols-1) {
        playerX=0;
    }
    if(playerY<0) {
        playerY=totalRows-1;
    }
    if(playerY>totalRows-1) {
        playerY=0;
    }
    
    //trail.push({x:playerX,y:playerY});
    
    for(var i=0;i<trail.length;i++) {
        //ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs,gs);
        drawTail(i);
        if(trail[i].x==playerX && trail[i].y==playerY) {
            tail = 1;
            speed = 10;
            snakeColors=[];
            snakeColors.push(pickRandomColor());
            clearInterval(snakeInterval);
            snakeInterval = setInterval(game,1000/speed);
        }
    }
    
    trail.push({x:playerX,y:playerY});
    
    while(trail.length>tail) {
        trail.shift();
    }
 
    drawApple();
}

function drawApple(){
    if(appleX==playerX && appleY==playerY || firstTime) {
        tail++;
        snakeColors.push(pickRandomColor());
        //console.log(snakeColors);
        appleX=Math.floor(Math.random()*totalCols);
        appleY=Math.floor(Math.random()*totalRows);
        speed++;
        clearInterval(snakeInterval);
        snakeInterval = setInterval(game,1000/speed);

        firstTime = false;
    }
    
    ctx.fillStyle="red";
    ctx.fillRect(appleX*gs,appleY*gs,gs-2,gs-2);
}

function pickRandomColor(){
    var colorRed = Math.floor(Math.random()*256).toString(16);
    var colorGreen = Math.floor(Math.random()*256).toString(16);
    var colorBlue = Math.floor(Math.random()*256).toString(16);
    
    return '#' + colorRed + colorGreen + colorBlue;
}

function drawTail(newTailIndex) {
    // ,trail[i].y*gs,gs
    // topX, leftY, diameter
    var topX = trail[newTailIndex].x*gs;
    var leftY = trail[newTailIndex].y*gs;
    var radius = gs/2;
    
	ctx.fillStyle = snakeColors[newTailIndex];
	ctx.beginPath();
	
	ctx.arc(topX+radius, leftY+radius, radius, 0,Math.PI*2,true);
	ctx.fill();
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xDirection=-1;yDirection=0;
            break;
        case 38:
            xDirection=0;yDirection=-1;
            break;
        case 39:
            xDirection=1;yDirection=0;
            break;
        case 40:
            xDirection=0;yDirection=1;
            break;
    }
}