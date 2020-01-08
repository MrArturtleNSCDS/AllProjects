var gridSize = 600;
var numBlocks;
var numColors;
var grid = $('#grid');
var colors = ["white","gray","black","red","orange","lime","navy","purple"];
var blocks;
var totalClicks;
var counterBox = $('#counter');
var message = $("#message");

class Block{
    constructor(r,c,size,color){
        this.row = r;
        this.col = c;
        this.x = c * size;
        this.y = r * size;
        this.ider = '[row=' + this.row + '][col=' + this.col + ']';
        this.size = size;
        this.neighbors = [];
        
        this.first = true;
    
    
        var htmlString = "<div class='block' style='width:" + this.size + "px; height:" + this.size + "px;" +
                " background-color:" + color + "; left:" + this.x + "px; top:" + this.y + "px;'" +
                " row='" + r + "' col='" + c + "'></div>";
    
        //console.log(htmlString);
    
        grid.append(htmlString);
        this.color = $(this.ider).css("background-color");
    }

    draw(newColor){
        var toDraw = $(this.ider);
        toDraw.css("background-color",newColor);
        this.color = toDraw.css("background-color");
    }
    
    flood(clickedColor){
        var oldColor = this.color;
        if(this.first){
            this.first = false;
            this.getNeighbors();
        }
        this.draw(clickedColor);
        for(var n=0; n<this.neighbors.length; n++){
            var currNeighbor = this.neighbors[n];

            if(currNeighbor.color == oldColor){
                currNeighbor.flood(clickedColor);
                
            }
        }
    }
    
    getNeighbors(){
        var currCoor = this.col+1;
        if(0<=currCoor && currCoor<numBlocks)
            this.neighbors.push(blocks[this.row][currCoor]);
            
        currCoor = this.col-1;
        if(0<=currCoor && currCoor<numBlocks)
            this.neighbors.push(blocks[this.row][currCoor]);
        
        currCoor = this.row+1;
        if(0<=currCoor && currCoor<numBlocks)
            this.neighbors.push(blocks[currCoor][this.col]);
            
        currCoor = this.row-1;
        if(0<=currCoor && currCoor<numBlocks)
            this.neighbors.push(blocks[currCoor][this.col]);
            
    }
}

init();

function init(){
    numBlocks = parseInt($("#sizeSelect option:selected" ).val());
    numColors = parseInt($("#colorSelect option:selected" ).val());
    grid.width(gridSize);
    grid.height(gridSize);
    drawGrid();
}

function drawGrid(){
    message.hide();
    var blockSize = gridSize/numBlocks;
    totalClicks = 0;
    counterBox.text(totalClicks);
    blocks = [];
    grid.empty();
    
    for(var r=0; r<numBlocks; r++){
        blocks.push([]);
        for(var c=0; c<numBlocks; c++){
            blocks[r].push(new Block(r,c,blockSize,randomColor()));
        }
    }
    
    console.log(blocks);
    
    $('.block').click(
        function(){
            var clickedColor = $(this).css("background-color");
            flood(clickedColor);
        }
    );
}

function randomColor(){
    return colors[Math.floor(Math.random()*numColors)];
}

$('select').change(
    function(){
        numBlocks = parseInt($("#sizeSelect option:selected" ).val());
        numColors = parseInt($("#colorSelect option:selected" ).val());
        drawGrid();
    }
);

function flood(clickedColor){
    var currBlock = blocks[0][0];
    if(currBlock.color != clickedColor){
        counterBox.text(++totalClicks);
        currBlock.flood(clickedColor);
        if(checkWin(currBlock))
            message.fadeIn();
    }

}

function checkWin(refBlock){
    //var contig = 0;
    var stillContig = true;
    var r=0;
    var startingColor = refBlock.color;
    while(r<numBlocks && stillContig){
        c=0;
        while(c<numBlocks && stillContig){
            stillContig = startingColor == blocks[r][c].color;
            c++;
        }
        r++;
    }
    console.log(stillContig);
        
    return stillContig;
}