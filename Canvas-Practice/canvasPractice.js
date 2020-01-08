var c = document.getElementById("practice");
var ctx = c.getContext("2d");

function circle(x,y,r,isFilled,useCenter,color){
    ctx.beginPath();
    if(!useCenter){
        x+=r;
        y+=r;
    }

    ctx.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
    if(isFilled){
        ctx.fillStyle=color;
        ctx.fill();
    }
    else{
        ctx.strokeStyle=color;
        ctx.stroke();
    }

}

circle(0,0,40,false,false,"red");
circle(140,0,40,false,false,"blue");
circle(70,0,40,true,false,"green");

circle(150,150,150,true,true,"red");
circle(150,150,100,true,true,"white");
circle(150,150,50,true,true,"red");


/*ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth="5";
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();

ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle = "black";
ctx.setLineDash([8,5])
ctx.moveTo(0, 200);
ctx.lineTo(200,0);
ctx.stroke();
*/
