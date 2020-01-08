var startSize = 500;
var factor = .9;
var speed = 10;


for(var i=0; i<32; i++){
    var appendingTo = '[appendIndex=' + i + ']';
    var newAppendingTo = "appendIndex='" + (i+1) + "'";
    //var color = "background-color:" + randomColor() + ";";
    var color = "";
    var bColor = randomColor();
    $('body').css("background-color",bColor);
    console.log(color);
    var style = "style='width:" + startSize + "px; height:" + startSize + "px; " + color + "'";
    console.log(appendingTo);
    console.log(style);
    $(appendingTo).append(
        "<div class='thing color" + (i%2) + " diag" + (i%2) + "' " + newAppendingTo + " " +
        style + "></div>"
    );
    var tweenTarget = "[" + newAppendingTo + "]";
    
    TweenMax.to(tweenTarget, speed,{rotation:360,repeat:-1,ease:Linear.easeNone});
    startSize = Math.round(startSize*factor);
}

function randomColor(){
    var validColor = "0123456789abcdef";
    var rgbArray = [];
    var color='#';
    for(var i=0; i<3; i++)
        rgbArray.push(Math.floor((Math.random() * 255)));
    return "rgb("+rgbArray.toString()+")";
}