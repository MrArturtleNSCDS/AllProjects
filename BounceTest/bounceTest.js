var mainCanvas = document.getElementById("main");
var mainPencil = mainCanvas.getContext("2d");
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
var canvasColor = "#000";//mainCanvas.backgroundColor;


var radius = 30;

var x = radius;
var y = radius;
var dX = 1;
var dY = 1;

var adjustedColor;
var adjustedRadius;
/*if(!this.erase){
    adjustedColor = "#fff";
    adjustedRadius = this.radius;
}
else{
    adjustedColor = canvasColor;
    adjustedRadius = this.radius + 1;
}*/


update();

function update(){
    mainPencil.fillStyle = 'black';
    mainPencil.beginPath();
    mainPencil.arc(x, y, radius, 0, 2 * Math.PI);
    mainPencil.fill();
    x += dX;
    y += dY;
    
    if(x+radius>=canvasWidth || x-radius<=0)
        dX *=1;
    if(y+radius>=canvasHeight || y-radius<=0)
        dY *=1;
        
    
    mainPencil.fillStyle = 'red';
    mainPencil.beginPath();
    mainPencil.arc(x, y, radius, 0, 2 * Math.PI);
    mainPencil.fill();
    requestAnimationFrame(update);
}

$('button').click(
    function(){
        update();
    }
);
