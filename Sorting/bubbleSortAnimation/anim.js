function shuffle (array) {
    var i=0,j=0,temp=null;
    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    
        temp=array[i].x;
        array[i].x=array[j].x;
        array[j].x=temp;
    }
    return array;
}


function randVal(min, max) {
    return (Math.floor(Math.random()*(max - min + 1) + min));
}

function randFloat(min, max) {
    return (Math.random()*(max - min + 1) + min);
}


//function start(){
myCanvas=document.getElementById("myCanvas");
ctx=myCanvas.getContext("2d");
var widthRatio=0.9;
var heightRatio=0.50;

myCanvas.width = window.innerWidth*widthRatio;
myCanvas.height = window.innerHeight*heightRatio;

var barSettings={
    width:25,
    heightMultiplier:20,
    margin:7
}

var swapInterval=null;
var swappingFlag=false;
var colorsArray=["yellow","black","red","green","blue","orange","purple","lightgreen","pink"]
var barsArray=[];

document.getElementById("shuffleArray").onclick=function(){
    barsArray=shuffle(barsArray);
    drawBars();
}

document.getElementById("bubbleSort").onclick=function(){
    document.getElementById("shuffleArray").disabled=true;
    document.getElementById("bubbleSort").disabled=true;
    bubbleSort(barsArray);
    
    sortInterval=setInterval(function(){
        sorted=true;
        for(i=0;i<barsArray.length-1;i++){
           if(barsArray[i].x>barsArray[i+1].x)
                sorted=false;
            //console.log(i);
        }
        if(sorted){
            clearInterval(sortInterval);
            document.getElementById("shuffleArray").disabled=false;
            document.getElementById("bubbleSort").disabled=false;
            document.getElementById("info").innerHTML="All Done!";
        }
    },1000);
    
}
    
xBuffer=barSettings.margin*2;
for(i=1;i<10;i++){
    barsArray.push({
        value:i,
        width:barSettings.width,
        height:barSettings.heightMultiplier*i,
        x:xBuffer,
        y:myCanvas.height-barSettings.heightMultiplier*i-10,
        color:colorsArray[i%colorsArray.length]
    });
    xBuffer+=barSettings.width+barSettings.margin;
}

function drawBars(){
    ctx.fillStyle="lightblue"; ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
    xBuffer=barSettings.margin*2;
    for(i=0;i<barsArray.length;i++){
        bar=barsArray[i];
        ctx.beginPath();
        ctx.fillStyle=bar.color;
        ctx.rect(bar.x,bar.y,bar.width,bar.height);
        
        ctx.fill(); 
        ctx.font="20px Times New Roman";
        ctx.fillStyle="black"; ctx.fillText(bar.value,bar.x+barSettings.width/4,bar.y-barSettings.margin);
        ctx.closePath();
        
    }
}

function swapAnimation(barA,barB){
    drawBars();
    
    if(barA.x>=xB || barB.x<=xA){
        clearInterval(swapInterval);
        swapInterval=null;
        swappingFlag=false;
    }
    else{
        barA.x++;
        barB.x--;
    }
}
    
function swapBars(barA,barB){
    if(!swapInterval){
        xA=barA.x;
        xB=barB.x;
        swappingFlag=true;
        document.getElementById("info").innerHTML=barA.value + " > " + barB.value + " --> SWAP!";
        swapInterval=setInterval(
            function(){
                swapAnimation(barA,barB);
            },
            10
        );
    }
    else{
        console.log("swapBars else");
        setTimeout(swapBars.bind(null,barA,barB),4000);
    }
    //swapInterval=setInterval(swapAnimation.bind(null,barsArray[0],barsArray[1]),33);
}
    
function bubbleSort(a){
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            console.log("bubbleSort:" + i);
            if (a[i].value > a[i+1].value) {
                swapBars(a[i],a[i+1]);
                
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                
                swapped = true;
            }
        }
    } while (swapped);
}
drawBars();

//}


//window.onload=start;