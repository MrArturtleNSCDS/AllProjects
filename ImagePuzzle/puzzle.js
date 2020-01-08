var grid = $('#grid');


class Block{
    //var size;
    constructor(parent,left,top,size,id,content){
        this.left = left;
        this.top = top;
        this.size = size;
        this.id = id;
        this.parent = parent;
        this.content=
            `<div style='
                background:url(${content}) no-repeat -${left}px -${top}px;
                background-size:${parent.width()}px ${parent.height()}px
            '></div>`;
        //this.draw();
    }
    
    draw(){
        this.parent.append(
            `<div class='block' blockNum='${this.id}' style='left:${this.left}px; top:${this.top}px' x=${this.left} y=${this.top}>
                ${this.content}
            </div>`
        );
        
    }
    
    move(){
        var parentSize = this.parent.width();
        var nextLocation = [];
        
        console.log(this.left,this.top);
        
        var findX = this.left;
        var findY = this.top-100;

        if(findY>=0){
            var neighborElement = this.parent.find(`[x=${findX}][y=${findY}]`);
            if(neighborElement.length===0){
                nextLocation = [findX,findY];
            }
        }
        
        if(nextLocation.length===0){
            findY = this.top+100;
            if(findY<parentSize){
                var neighborElement = this.parent.find(`[x=${findX}][y=${findY}]`);
                if(neighborElement.length===0){
                    nextLocation = [findX,findY];
                }
            }
        }

        if(nextLocation.length===0){
            findX = this.left-100;
            findY = this.top;
            if(findX>=0){
                var neighborElement = this.parent.find(`[x=${findX}][y=${findY}]`);
                if(neighborElement.length===0){
                    nextLocation = [findX,findY];
                }
    
            }
        }

        if(nextLocation.length===0){
            findX = this.left+100;
            if(findX<parentSize){
                var neighborElement = this.parent.find(`[x=${findX}][y=${findY}]`);
                if(neighborElement.length===0){
                    nextLocation = [findX,findY];
                }
    
            }
        }

        console.log(nextLocation);
        if(nextLocation.length>0){
            var currElement = $(`[blockNum=${this.id}]`);
            
            this.left =  nextLocation[0];
            this.top = nextLocation[1];

            TweenMax.to(currElement, .5, {left:this.left,top:this.top,ease:SlowMo.easeInOut});
            currElement.attr("x",this.left);
            currElement.attr("y",this.top);
        }

    }
}

class Grid{
    constructor(gridElement,sizePx,numBl,image){
        var self = this;
        this.sizePx = sizePx;
        this.blockSize = Math.floor(sizePx/numBl);
        this.blockArray = [];
        this.image = image;
        var count = 0;
        for(var r=0; r<numBl; r++){
            for(var c=0; c<numBl; c++){
                count++;
                if(r!=numBl-1 || c!=numBl-1){
                    var x = c * this.blockSize;
                    var y = r * this.blockSize;
                    this.blockArray.push(
                        new Block(
                            gridElement,x,y,this.blockSize,
                            this.blockArray.length,
                            this.image
                        )
                    );
                }
            }
        }
        
        this.shufflePieces(this.blockArray);
        
        for(var b=0; b<this.blockArray.length; b++){
            this.blockArray[b].draw();
        }
            
        $(".block").click(
            function(){
                var clickedBlock = $(this).attr('blockNum');
                console.log("clickedBlock: " + clickedBlock);
                console.log("clickedBlock id: " + self.blockArray[clickedBlock].id);
                self.blockArray[clickedBlock].move();
            }
        );
    }
    shufflePieces(array){
        var inversionArray = [];
        
        for(var i=0; i<array.length; i++){
            inversionArray.push(i);
        }
        console.log("inversion array: "  + inversionArray);
        for(var i=0; i<array.length; i++){
            var a = Math.floor(Math.random()*array.length);
            var b = Math.floor(Math.random()*array.length);
            
            this.swapSpots(array, inversionArray, a, b);
        }
        console.log(inversionArray);
        if(this.checkInversions(inversionArray)%2===1){
            console.log("not solvable");
            var a = array.length - 1;
            var aValue = array[a];
            
            var b = a-1;
            var bValue = array[b];
            
            while(bValue < aValue && b>=0){
                b--;
            }
            
            this.swapSpots(array, inversionArray, a, b);
            
            console.log(inversionArray);
            console.log(this.checkInversions(inversionArray));
        }

    }
    
    swapSpots(array, trackingArray, a, b){
        var tSpot = trackingArray[a];
        trackingArray[a]=trackingArray[b];
        trackingArray[b]=tSpot;
        
        var tContent = array[a].content;
        array[a].content = array[b].content;
        array[b].content = tContent;
    }
    
    checkInversions(array){
        var arrayCopy = JSON.parse(JSON.stringify( array ));
        var numInversions = 0;
        for (var i = 0; i < arrayCopy.length; i++)
            for (var j = 0; j < arrayCopy.length-i; j++)
                if (arrayCopy[j] > arrayCopy[j+1]){
                    var t = arrayCopy[j];
                    arrayCopy[j]=arrayCopy[j+1];
                    arrayCopy[j+1]=t;
                    numInversions++;
                }
        console.log(numInversions);
        return numInversions;
    }
}

init();

function init(){
    var gameGrid = new Grid(grid,grid.width(),4,"img/NSCDSLogo72.png");
}

$('#availPuzzles img').click(
    function(){
        var imageSrc = $(this).attr("src");
        console.log(imageSrc);
        $(".block div").css("background-image",`url(${imageSrc})`);
    }
);