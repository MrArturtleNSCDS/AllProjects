/*eslint-disable no-undef */

var diameter = 250; 
TweenMax.to("#mercury", 15 ,{
    bezier:{
        curviness:1.5,
        values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]
    },
    ease:Power0.easeNone,repeat:-1
});


var diameter = 400; 
TweenMax.to("#venus", 20 ,{
    bezier:{
        curviness:1.5,
        values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]
    },
    ease:Power0.easeNone,repeat:-1
});

var diameter = 600; 
TweenMax.to("#earthWrapper", 24 ,{
    bezier:{
        curviness:1.5,
        values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]
    },
    ease:Power0.easeNone,repeat:-1
});

var diameter = 80; 
TweenMax.to("#earthMoon", 1,{
    bezier:{
        curviness:1.5,
        values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]
    },
    ease:Power0.easeNone,repeat:-1
});

var diameter = 800; 
TweenMax.to("#mars", 24 ,{
    bezier:{
        curviness:1.5,
        values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]
    },
    ease:Power0.easeNone,repeat:-1
});

var diameter = 1000; 
TweenMax.to("#jupiter", 24 ,{
    bezier:{
        curviness:1.5,
        values:[{x:0,y:0},{x:-diameter/2,y:diameter/2},{x:0,y:diameter},{x:diameter/2,y:diameter/2},{x:0,y:0}]
    },
    ease:Power0.easeNone,repeat:-1
});

//var canvas = $('#canvas');

var numStars = 1000;
var starWrapper = $('#starWrapper');
var cWidth = starWrapper.width();
var cHeight = starWrapper.height();


var allStarsString = "";

for(var s=0; s<numStars; s++){
    var x = Math.floor(Math.random()*cWidth);
    var y = Math.floor(Math.random()*cHeight);
    var size = Math.floor(Math.random()*10)+1;
    var opacity = 1; 
    allStarsString += 
        "<div id='star" + s + "' class='star' style='left:" + x + "px;top:" + y + "px;" +
        "opacity:" + opacity + "; width:" + size + "px; height:" + size + "px'></div>";
}

console.log(allStarsString);
starWrapper.append(allStarsString);

