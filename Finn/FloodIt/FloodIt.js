/*eslint-env jquery */
var canvas = document.getElementById('canvas');
var cv = canvas.getContext('2d');
canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;


var colors = ['red','blue','yellow','pink','purple','orange'];
var color;
var nowColor;
var boxNum = 3;
var boxClumpX = 400;
var boxClumpY = 50;

for(var t=0; t<6;t++){
    $(".colorBar").append("<div class = 'colors' id ='color"+t+"'></div>");
    $('#color'+t).css('background-color',colors[t]);
}

$('.colorBar').css("left",boxClumpX-250);
$('.colorBar').css('bottom',boxClumpY);


var objects = [];


function Box(r,c,color){
    var cellSize = 20;
    this.row = r;
    this.collumn = c;
    this.x = r*cellSize+60;
    this.y = c*cellSize+60;
    this.color = color;
    
    this.neighbors = [];
    this.getNeighbors = function(){
        if(this.row > 0){
            this.neighbors.push(objects[r-1][c]);    
        }
        
        if(this.row < boxNum - 1){
            this.neighbors.push(objects[r+1][c]);
        }
        
        if(this.collumn > 0){
            this.neighbors.push(objects[c-1][r]);
        }
        
        if(this.collumn < boxNum - 1){
            this.neighbors.push(objects[c+1][r]);
        }
        
        console.log(this.neighbors);

    };

    this.draw = function(){
        cv.fillStyle = this.color;
        cv.fillRect(this.x,this.y,cellSize,cellSize);     
        
    }; 
    
    this.draw();
}



for(var r = 0; r < boxNum; r++){
    objects.push([]);
    for(var c = 0; c < boxNum; c++){
        var randomColNum = Math.floor(Math.random()*6);
        color = colors[randomColNum];
        objects[r].push(new Box(r,c,color)); 
    }
}

console.log(objects)


for(var o=0; o < boxNum * boxNum; o++){

}


//for(var rr = 0; rr < boxNum; rr++){
    //objects.push([]);
    //for(var cc = 0; cc < boxNum; cc++){
         objects[0][0].getNeighbors();
   // }
//}

$('.colors').click(
    function(){
        nowColor = $(this).css('background-color');     
        changeColor();
    }
);

function changeColor(){
    objects[0][0].color = nowColor;
    objects[0][0].draw();

}


