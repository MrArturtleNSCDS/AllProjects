var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


class BigBox{
    constructor(width,x,y){
        this.width = width;
        this.x = x;
        this.y = y;
        
        this.draw();
    }
    
    draw(){
        ctx.fillStyle = 'rgb(187,173,162)';
        ctx.fillRect(this.x,this.y,this.width,this.width);
    }
}

class Spot{
    constructor(width,x,y,r,c){
        this.width = width;
        this.margin = 1.2;
        this.r = r;
        this.c = c;
        this.x = (this.r*this.width*this.margin)+x+16;
        this.y = (this.c*this.width*this.margin)+y+16;
        this.filled = false;
        
        this.draw();
    }
    
    draw(){
        ctx.fillStyle = 'rgb(205,193,181)';
        ctx.fillRect(this.x,this.y,this.width,this.width);
    }
}

class Tile{
    constructor(length,x,y,value){
        this.length = length;
        this.x = x;
        this.y = y;
        this.value = value;
    }
    
    draw(){
        
    }
}



var Spots = [];
function drawSpots(width,x,y){
    for(var r = 0; r < 4; r++){
        Spots.push([]);
        for(var c = 0; c < 4; c++){
            //Spots[r].push(new Spot(width,x,y,r,c));
            Spots[r].push(c);
        }
        console.log(Spots);
        console.log(Spots[r]);
    }

}

function newTile(){
    var random = Math.random();
    var value = undefined;
    if(random > 0.9){
        value = 4;
    }
    else{
        value = 2;
    }
    
    var openSpots = [];
    for(var r = 0; r < 4; r++){
        for(var c = 0; c < 4; c++){
            if(Spots[r][c].filled = 'false'){
                openSpots.push(Spots[r][c]);
            }
        } 
    }
    
    console.log(openSpots);
}

addEventListener('keydown',keyPress);
var direction = undefined;
function keyPress(evt){
    if(evt.keyCode == 37){
        direction = 'left';
    }
    
    if(evt.keyCode == 38){
        direction = 'up';
    }
    
    if(evt.keyCode == 39){
        direction = 'right';
    }
    
    if(evt.keyCode == 40){
        direction = 'down';
    }
    
    newTile();
}


function init(){
    var bigWidth = 400;
    var bigX = (canvas.width/2)-(bigWidth/2);
    var bigY = (canvas.height/2)-(bigWidth/2);
    var tileWidth = bigWidth/5;

    new BigBox(bigWidth, bigX, bigY); 
    drawSpots(tileWidth,bigX,bigY);
}


init();

console.log(Spots)
console.log(Spots[0])
