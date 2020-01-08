var mainCanvas;
var mainPencil;
var canvasWidth;
var canvasHeight;
var canvasColor;

var objects = [];


var widths = [50,100,250];
var blockHeight = 25;
var colors = [
    {inner:'#f00',outer:'#800'},
    {inner:'#0f0',outer:'#080'},
    {inner:'#00f',outer:'#00a'},
    {inner:'#ff0',outer:'#d90'}
];

var numRows = 9;

var ball;
var ballRadius=20;
var speed = 5;

var paddle;
var paddleWidth = 100;
var paddleColor = {inner:'#fff',outer:"#999"};
var borderWidth = 2;


//var doAnimation = true;
var mouseX;
var mouseY;

addEventListener("mousemove",
    function(event){
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
);

document.body.onkeyup = function(e){
    if(e.keyCode === 32){
        ball.move();
    }
};

init();

function init(){
    mainCanvas = document.getElementById("main");
    mainPencil = mainCanvas.getContext("2d");
    
    canvas2 = document.getElementById("other");
    canvas2Pencil = canvas2.getContext("2d");
    
    canvasWidth = mainCanvas.width;
    canvasHeight = mainCanvas.height;
    canvasColor = "#444";//mainCanvas.backgroundColor;

    for(var i=0; i<numRows; i++)
        fillRow(i);
        
    paddle = new Paddle(canvasWidth/2-paddleWidth/2,canvasHeight-100,paddleWidth);
    objects.push(paddle);
    ball = new Ball(500,500,ballRadius,speed);
    

    console.log(objects);
    animate();
}

function fillRow(rowNum){
    var y = rowNum*blockHeight;
    var availPixels = canvasWidth;
    var index = 0;
    while(availPixels>0 && index<30){
        var randomColor = randNum(colors.length);
        var nextX = canvasWidth-availPixels;
        index ++;
        
        var randomWidth = widths[randNum(widths.length)];

        if(availPixels>=randomWidth){
            var newBlock = new Block(nextX,y,randomWidth,randomColor);
            newBlock.draw();
            objects.push(newBlock);
            availPixels-=randomWidth;
        }
    }
}

function animate(){
    ball.move();
    paddle.move();

    var numVisible = 0;
    
    for(var b=0; b<objects.length; b++){
        if(objects[b].type=="block" && objects[b].visible)
            numVisible++;
    }
    
    $('#numVisible').text(numVisible);

    if(numVisible>0)
        requestAnimationFrame(animate);
}

function Block(x,y,width,colorIndex){
    this.type = "block";
    this.left = x;
    this.right = x + width;
    this.top = y;
    this.bottom = y + blockHeight;
    this.height = blockHeight;
    this.visible = true;
    
    this.draw = function(){
        if(this.visible){
            mainPencil.fillStyle = colors[colorIndex].inner;
            mainPencil.strokeStyle = colors[colorIndex].outer;
        }
        else{
            mainPencil.fillStyle = canvasColor;
            mainPencil.strokeStyle = canvasColor;
        }
        mainPencil.lineWidth = borderWidth;
        mainPencil.fillRect(this.left, this.top, width, this.height);
        mainPencil.strokeRect(this.left, this.top, width, this.height);
    };
    this.isInside = function(circleX,circleY){
        return this.left-borderWidth<=circleX && circleX<=this.right+borderWidth && 
                this.top-borderWidth<=circleY && circleY<=this.bottom+borderWidth;
    };
}

function Paddle(x,y,width){
    this.type = "paddle";
    this.left = x;
    this.right = x+width;
    this.top = y;
    this.height = 10;
    this.bottom = this.top + this.height;
    this.erase = true;
    this.visible = true;
    
    this.draw = function(){
        var xCoord = this.left;
        var yCoord = this.top;
        var innerColor = paddleColor.inner;
        var outerColor = paddleColor.outer;
        var paddleWidth = width;
        var paddleHeight = this.height;
        
        if(this.erase){
            innerColor = canvasColor;
            outerColor = canvasColor;
            
            xCoord-=1;
            yCoord-=1;
            paddleWidth += 2;
            paddleHeight += 2;
        }

        mainPencil.fillStyle = innerColor;
        mainPencil.strokeStyle = outerColor;
       
        mainPencil.lineWidth = borderWidth;
        mainPencil.fillRect(xCoord, yCoord, paddleWidth, paddleHeight);
        mainPencil.strokeRect(xCoord, yCoord, paddleWidth, paddleHeight);
    };
    
    this.move = function(){
        this.erase = true;
        this.draw();
        
        this.left = mouseX - width/2;
        if(this.left<0)
            this.left = 0;
        if(this.left+width>canvasWidth)
            this.left = canvasWidth - width;
            
        //this.top = mouseY - this.height/2;
        //this.bottom = this.top+this.height;
            
        this.right = this.left + width;
 
        this.erase = false;
        this.draw();
    };
    
    this.isInside = function(circleX,circleY){
        $('#edges').text(this.left + " " + this.right + " " + this.top + " " + this.bottom);
        //console.log("paddle:" + " " + circleX + "," + circleY);
        return this.left-borderWidth<=circleX && circleX<=this.right+borderWidth && 
                this.top-borderWidth<=circleY && circleY<=this.bottom+borderWidth;
    };
}

function Ball(x,y,radius,speed){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.erase = false;
    
    this.dX = 1;
    this.dY = -1;
    this.speed = speed;
    
    this.move = function(){
        this.erase = true;
        this.draw();
        
        if(this.x-this.radius <= 0 || this.x+this.radius >= canvasWidth)
            this.dX *= -1;
    
        if(this.y-this.radius <= 0 || this.y+this.radius >= canvasHeight)
            this.dY *= -1;
            
        this.x += this.dX*this.speed;
        this.y += this.dY*this.speed;
        
        $('#ballX').text(this.x);
        $('#ballY').text(this.y);
    
        this.erase = false;
        this.draw();
        this.collision();
    };

    this.draw = function(){
        var adjustedColor;
        var adjustedRadius;
        if(!this.erase){
            adjustedColor = "#fff";
            adjustedRadius = this.radius;
        }
        else{
            adjustedColor = canvasColor;
            adjustedRadius = this.radius + 1;
        }
        mainPencil.fillStyle = adjustedColor;
        mainPencil.beginPath();
        mainPencil.arc(this.x, this.y, adjustedRadius, 0, 2 * Math.PI);
        mainPencil.fill();
    }
    
    this.collision = function(){
        var collisionFound = false;
        var currObjectIndex;
        $('#inside').text();
        var angle = 0;
        var safetyNum = 0;
        
        var currObject;
        var xCheck;
        var yCheck;
        
        while(!collisionFound && angle<360 && safetyNum<1000){
            xCheck = Math.round(Math.cos(toRadians(angle))*radius+this.x);
            yCheck = Math.round(Math.sin(toRadians(angle))*radius+this.y);
            currObjectIndex = objects.length-1;
            while(currObjectIndex>=0 && !collisionFound){
                currObject = objects[currObjectIndex];
                if(currObject.isInside(xCheck,yCheck) && currObject.visible)
                    collisionFound = true;
                else{
                    currObjectIndex--;
                }
            }
            if(!collisionFound){
                angle+=6;
            }

            safetyNum++;
            
        }
        
        if(collisionFound){
            $('#checkBallX').text(xCheck);
            $('#checkBallY').text(yCheck);
            var lowAngle = angle;
            var highAngle = angle;
            
            if(currObject.type == "block")
                currObject.visible = false;
            currObject.draw();
            
            for(angle; angle<360; angle+=9){
                xCheck = Math.round(Math.cos(toRadians(angle))*radius+this.x);
                yCheck = Math.round(Math.sin(toRadians(angle))*radius+this.y);
                if(objects[currObjectIndex].isInside(xCheck,yCheck))
                    highAngle = angle;
            }
            
            if(highAngle-lowAngle>180)
                highAngle -= 360;
                
            var finalAngle = Math.round((highAngle+lowAngle)/2);
            
            $('#lowAngle').text(lowAngle);
            $('#highAngle').text(highAngle);
            $('#finalAngle').text(finalAngle);
            
            if(268<=finalAngle && finalAngle<=272 || 88<=finalAngle && finalAngle <= 92)
                this.dY *= -1;
            else if(finalAngle == 0 || finalAngle == 180)
                this.dX *= -1;
            else{
                this.dX *= -1;
                this.dY *= -1;
            }
                
        }
    };
}

$('button').click(
    function(){
        ball.move();
    }
);

function randNum(high){
    return Math.floor(Math.random()*high);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}


