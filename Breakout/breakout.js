var mainCanvas;
var mainPencil;
var canvasWidth;
var canvasHeight;
var canvasColor;

var blocks = [];
var widths = [50,100,250];
var blockHeight = 25;
var colors = [
    {inner:'#f00',outer:'#800'},
    {inner:'#0f0',outer:'#080'},
    {inner:'#00f',outer:'#00a'},
    {inner:'#ff0',outer:'#d90'}
]

var numRows = 9;

var ball;
var ballRadius=20;
var speed = 5;

var paddle;
var paddleWidth = 100;
var paddleColor = {inner:'#fff',outer:"#999"};


var doAnimation = true;
var mouseX;

addEventListener("mousemove",
    function(event){
        mouseX = event.clientX;
    }
);

init();

function init(){
    mainCanvas = document.getElementById("main");
    mainPencil = mainCanvas.getContext("2d");
    canvasWidth = mainCanvas.width;
    canvasHeight = mainCanvas.height;
    canvasColor = "#444";//mainCanvas.backgroundColor;

    for(var i=0; i<numRows; i++)
        fillRow(i);
        
    paddle = new Paddle(canvasWidth/2-paddleWidth/2,canvasHeight-100,paddleWidth);
    ball = new Ball(500,500,ballRadius,speed);
    
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
            blocks.push(newBlock);
            availPixels-=randomWidth;
        }
    }
}

function animate(){
    ball.move();
    paddle.move();
    
    for(var b=0; b<blocks.length; b++)
       blocks[b].collision();
       
    paddle.collision();

    var numVisible = 0;
    
    for(var b=0; b<blocks.length; b++){
        if(blocks[b].visible)
            numVisible++;
    }

    if(numVisible>0)
        requestAnimationFrame(animate);
}

function Block(x,y,width,colorIndex){
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
        mainPencil.lineWidth = 2;
        mainPencil.fillRect(this.left, this.top, width, this.height);
        mainPencil.strokeRect(this.left, this.top, width, this.height);
    };
    
    this.collision = function(){
        if(this.visible){
            if(collisionPoint(this)==1 || collisionPoint(this)==3){
                ball.dY *= -1;
                this.visible = false;
            }
            
            if(collisionPoint(this)==2 || collisionPoint(this)==4){
                ball.dX *= -1;
                this.visible = false;
            }
            
            if(!this.visible)
                this.draw();
        }
    };
}

function Paddle(x,y,width){
    this.left = x;
    this.right = x+width;
    this.top = y;
    this.height = 10;
    this.bottom = this.top + this.height;
    this.erase = true;
    
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

        mainPencil.fillStyle = innerColor
        mainPencil.strokeStyle = outerColor;
       
        mainPencil.lineWidth = 2;
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
            
        this.right = this.left + width;
 
        this.erase = false;
        this.draw();
    };
    
    this.collision = function(){
        if(collisionPoint(this)==1 || collisionPoint(this)==3)
            ball.dY *= -1;
        if(collisionPoint(this)==2 || collisionPoint(this)==4)
            ball.dX *= -1;
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
    };
    
}

function collisionPoint(blockObject){
    if(hasCollided(blockObject,'top'))
        return 1;
    if(hasCollided(blockObject,'right'))
        return 2;
    if(hasCollided(blockObject,'bottom'))
        return 3;
    if(hasCollided(blockObject,'left'))
        return 4;
    return 0;
}

function hasCollided(blockObject, partOfBlock){
    var partOfObject;
    var partOfBall;
    var boundary1, boundary2;
    var ballReference;
    
    switch(partOfBlock){
        case 'bottom': 
            partOfObject = blockObject.bottom;
            partOfBall = ball.y-ball.radius;
            boundary1 = blockObject.left;
            boundary2 = blockObject.right;
            ballReference = ball.x;
            break;
        case 'top': 
            partOfObject = blockObject.top;
            partOfBall = ball.y+ball.radius;
            boundary1 = blockObject.left;
            boundary2 = blockObject.right;
            ballReference = ball.x;
            break;
        case 'left':
            partOfObject = blockObject.left;
            partOfBall = ball.x+ball.radius;
            boundary1 = blockObject.top;
            boundary2 = blockObject.bottom;
            ballReference = ball.y;
            break;
        case 'right':
            partOfObject = blockObject.right;
            partOfBall = ball.x-ball.radius;
            boundary1 = blockObject.top;
            boundary2 = blockObject.bottom;
            ballReference = ball.y;
            break;
        default : console.log('invalid part');
    }
    
    var distance = Math.abs(partOfBall-partOfObject);
    
    if(-speed<distance && distance<speed)
        return ballReference>=boundary1 && ballReference<=boundary2;
}

$('button').click(
    function(){
        animate();
    }
);

function randNum(high){
    return Math.floor(Math.random()*high);
}


