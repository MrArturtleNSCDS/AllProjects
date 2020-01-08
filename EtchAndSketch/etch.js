var nextX;
var nextY;
var screenWidth;
var screenHeight;
var lineWidth = 4;
var xDirection = 0;
var yDirection = 0;
var strokeColor = '#444';

window.onload=function() {
    canv=document.getElementById("screen");
    ctx=canv.getContext("2d");
    screenWidth=canv.width;
    screenHeight=canv.height;
    nextX = screenWidth/2;
    nextY = screenHeight/2;
    document.addEventListener("keydown",keyPush);
    clearScreen();
};

function clearScreen(){
    ctx.fillStyle = '#888';
    ctx.fillRect(0,0,screenWidth,screenHeight);
    ctx.lineWidth=lineWidth;
    ctx.strokeStyle=strokeColor;
    console.log(nextX + ", " + nextY);
    ctx.beginPath();
    ctx.moveTo(nextX,nextY);
}

function keyPush(evt) {
    //console.log(evt.keyCode);
    //ctx.beginPath();
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
        case 69:
            xDirection=0;yDirection=0;
            clearScreen();
            break;
        case 67:
            xDirection=0;yDirection=0;
            drawCircle();
            break;
    }
    nextX+=xDirection*lineWidth;
    nextY+=yDirection*lineWidth;
    console.log(nextX + ", " + nextY);
    ctx.lineTo(nextX,nextY);
    ctx.stroke();
}

function drawCircle(){
    var offSet=0;
        
    radius = 20;
    
    //ctx.beginPath();
	ctx.arc(nextX, nextY-20, 20, Math.PI*0.5,Math.PI*.5+Math.PI*2,false);
	//ctx.arc(nextX, nextY-20, 20, 0,Math.PI*2,false);
	//ctx.stroke();
	console.log(nextX);
}