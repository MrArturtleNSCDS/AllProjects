var canvas = $('#canvas');
var cWidth = canvas.width();
var cHeight = canvas.height();
var numStars = 1000;
var starWrapper = $('#starWrapper');


var allStarsString = "";

for(var s=0; s<numStars; s++){
    var x = Math.floor(Math.random()*cWidth);
    var y = Math.floor(Math.random()*cHeight);
    var size = Math.floor(Math.random()*10)+1;
    var opacity = 1-(y/cHeight);
    //console.log(opacity);
    allStarsString += 
        "<div id='star" + s + "' class='star' style='left:" + x + "px;top:" + y + "px;" +
        "opacity:" + opacity + "; width:" + size + "px; height:" + size + "px'></div>";
}

console.log(allStarsString);
starWrapper.append(allStarsString);
var allStars = $('.star');

for( var i=0; i<allStars.length; i++ ){
	var tweenDuration = Math.random() * 2 + .5; //2 + i/10;
	var currStar = "#star" + i;
	//TweenMax.to(currStar,tweenDuration, {y:20, ease:Sine.easeInOut, repeat:-1, yoyo:true});
	//TweenMax.to(currStar,tweenDuration, {scale:.2, ease:Sine.easeInOut, repeat:-1, yoyo:true});
}

TweenMax.to('#shootingStar', 1, {x:cWidth*2,scale:.2, y:200, repeat:-1});