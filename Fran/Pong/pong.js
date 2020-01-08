var mainCanvas;
var mainPencil;
var canvasWidth;
var canvasHeight;
var mouseX = 0;
var mouseY = 0;
var ballX = 20;
var ballY = 20;
var ballR = 10;
var ballSpeed = 4;
var ballDx = ballSpeed;
var ballDy = ballSpeed;
var paddleHeight = 100;
var paddleCurrHeight = paddleHeight;
var paddleWidth = 20;
var paddleOffset = 30;

var score=0;

init();

function init(){
    mainCanvas = document.getElementById("gameCanvas");
    mainPencil = mainCanvas.getContext("2d");
    canvasWidth = mainCanvas.width;
    canvasHeight = mainCanvas.height;
    //canvasColor = "#444";//mainCanvas.backgroundColor;
    drawEverything();
    
}

function drawEverything(){
    mainPencil.clearRect(0,0,canvasWidth,canvasHeight);
    drawPaddles();
    moveBall();
    requestAnimationFrame(drawEverything);
}

function drawPaddles(){
    drawPaddle(paddleOffset,mouseY,paddleWidth,paddleCurrHeight,"#08c");
    drawPaddle(canvasWidth-paddleWidth-paddleOffset,mouseY,paddleWidth,paddleCurrHeight,"crimson");
}


function drawPaddle(x,y,w,h,color){
    mainPencil.fillStyle = color;
    mainPencil.fillRect(x, y-(paddleCurrHeight/2), w, h);
}

function moveBall(){
    drawBall(ballX,ballY,ballR,'green');
    
    var collision = false;
    var point = false;
    var heightOffset = paddleCurrHeight/2;
    var topPaddle = mouseY-heightOffset;
    var bottomPaddle = mouseY+heightOffset;
    var widthOffset = paddleWidth/2;
    
    //left paddle, right collision
    if(ballX-ballR<=paddleOffset+paddleWidth && ballX-ballR>=paddleOffset+widthOffset && ballY>topPaddle && ballY<bottomPaddle){
        collision = true;
        point = true;
        ballX = paddleOffset+paddleWidth+ballR;
    }

    //left paddle, left collision
    if(ballX+ballR>=paddleOffset && ballX+ballR<=paddleOffset+widthOffset && ballY>topPaddle && ballY<bottomPaddle){
        collision = true;
        ballX = paddleOffset-ballR;
    }

    //right paddle, left collision  
    if(ballX+ballR>=canvasWidth-paddleOffset-paddleWidth && ballX+ballR<=canvasWidth-paddleOffset-widthOffset && ballY>mouseY-heightOffset && ballY<bottomPaddle){
        collision = true;
        point = true;
        ballX = canvasWidth-paddleOffset-paddleWidth-ballR;
    }
    
    //right paddle, right collision
    if(ballX-ballR<=canvasWidth-paddleOffset && ballX-ballR>=canvasWidth-paddleOffset-widthOffset && ballY>mouseY-heightOffset && ballY<bottomPaddle){
        collision = true;
        ballX = canvasWidth-paddleOffset+ballR;
    }

    if(point){
        $('#score').text(++score);
        if(paddleCurrHeight>20)
            paddleCurrHeight-=2;
    }

    
    if(ballX-ballR<0 || ballX+ballR>canvasWidth || collision){
        ballDx = -ballDx;
        if(!point){
            score=0;
            $('#score').text(score);
            paddleCurrHeight = paddleHeight;
        }
    }
        
    if(ballY-ballR<0 || ballY+ballR>canvasHeight){
        //ballY = canvasHeight-ballR;
        ballDy = -ballDy;
    }
    
    ballX+=ballDx;
    ballY+=ballDy;
}

function drawBall(x,y,r,color){
    mainPencil.fillStyle = color;
	mainPencil.beginPath();
	mainPencil.arc(x, y, r, 0,Math.PI*2,true);
	mainPencil.fill();
}

$(document).mousemove(
    function(event){
        mouseX = event.offsetX;
        mouseY = event.offsetY;
        //console.log(mouseX,mouseY);
    }
);
