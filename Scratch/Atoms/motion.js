/*eslint-disable no-undef */

var totalElectrons = 0;
 
function addElectron(numSections,orbit,size){
    var diam = $(orbit).height();
    var radius = diam/2;
    //var totalDeg = ;
    var sectionDeg = (Math.PI*2)/numSections;
    var electronRadius = Math.round(size/2);
    
    /*var x = Math.round(diam/2) - Math.round(size/2);
    var y = -Math.round(size/2);*/
    
    console.log(diam,sectionDeg);
    for(var a=0; a<numSections; a++){
        var x = Math.round(Math.cos(sectionDeg*a) * radius) + radius - electronRadius;
        var y = Math.round(Math.sin(sectionDeg*a) * radius) + radius - electronRadius;
        $(orbit).append("<div id='electron" + ++totalElectrons + "' class='electron' style='left:" + x + "px;top:" + y + "px'>" + totalElectrons + "</div>");  

        console.log("________",a,"________")
        console.log(x,y);
        
        var pathCoordsAdj = [];
        var quarterCircle = (Math.PI*2)/4;
        x += electronRadius;
        y += electronRadius;
        console.log("new XY:",x,y);
        for(var p=0; p<=4; p++){
            var currAngle = quarterCircle*p + sectionDeg*a;
            var xE = Math.round(Math.cos(currAngle) * radius) + radius;
            var yE = Math.round(Math.sin(currAngle) * radius) + radius;
            console.log(xE,x,xE-x);
            pathCoordsAdj.push({x:xE-x,y:yE-y});
        }
        console.log(pathCoordsAdj);
        TweenMax.to("#electron"+totalElectrons, 5 ,{
        bezier:{curviness:1.5,values:pathCoordsAdj}
        ,ease:Power0.easeNone,repeat:-1});
    }
}

addElectron(3,'#ring1',20);
addElectron(6,'#ring2',20);
addElectron(9,'#ring3',20);

/*
var diam = 5 ; 
TweenMax.to(".nucleus", 1 ,{
bezier:{curviness:5,values:[{x:0,y:0},{x:-diam/2,y:diam/2},{x:0,y:diam},{x:diam/2,y:diam/2},{x:0,y:0}]}
,ease:Power0.easeNone,repeat:-1});*/

var nucleus = $('.nucleus');

nucleus.each(
    function(){
        var R = randomNum(1,4);
        var D = randomNum(1,4);
        var T = randomNum(1,2);
        //console.log(R,D,T);
        TweenMax.to(this, T,
            {bezier:{curviness:2,values:[{x:0,y:0},{x:-R/D,y:R/D},{x:0,y:R},{x:R/D,y:R/D},{x:0,y:0}]},
            ease:Power0.easeNone,repeat:-1});
    }
);



function randomNum(min,max){
    return (Math.random()*100*(max-min))/100 + min;
}