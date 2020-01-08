var canv;
var ctx;

var playerX=10;
var playerY=10;
var gs=20;
var totalCols;
var totalRows;
var appleX;
var appleY;
var xDirection=0;
var yDirection=0;
var trail=[];
var tail = 5;
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
};

function game() {
    playerX+=xDirection;
    playerY+=yDirection;
    if(playerX<0) {
        playerX = totalCols-1;
    }
    if(playerX>totalCols-1) {
        playerX= 0;
    }
    if(playerY<0) {
        playerY= totalRows-1;
    }
    if(playerY>totalRows-1) {
        playerY= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    for(var i=0;i<trail.length;i++) {
        //ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs,gs);
        addTail(trail[i].x*gs,trail[i].y*gs,gs);
        if(trail[i].x==playerX && trail[i].y==playerY) {
            tail = 1;
            speed = 10;
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
        appleX=Math.floor(Math.random()*totalCols);
        appleY=Math.floor(Math.random()*totalRows);
        speed++;
        gs*+10;
        clearInterval(snakeInterval);
        snakeInterval = setInterval(game,1000/speed);

        firstTime = false;
    }
    
    ctx.fillStyle="red";
    ctx.fillRect(appleX*gs,appleY*gs,gs-2,gs-2);
}

function addTail(topX, leftY, diameter) {
    var colorRed = Math.floor(Math.random()*256).toString(16);
    var colorGreen = Math.floor(Math.random()*256).toString(16);
    var colorBlue = Math.floor(Math.random()*256).toString(16);
    
    
	ctx.fillStyle = '#' + colorRed + colorGreen + colorBlue;
	ctx.beginPath();
	var radius = diameter/2;
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