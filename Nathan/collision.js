var randomVariablesX = [];
var randomVariablesY = [];

var flockInput = 1;

function setup() {
    createCanvas(800, 400);
    noCursor();
    strokeWeight(0);
}

calcNewValues();

var flock = [];
var dx = 0;
var dy = 0;
var diam = 10;
var prevPosX = 0;
var currPosX = 0;
var prevPosY = 0;
var currPosY = 0;
var velocity = 0;

function draw() {
    background(51);
    fill(255);
    var playerEllipse = ellipse(mouseX, mouseY, diam, diam);
    fill(175);
    for (var i = 0; i < flockInput; i++) {
        var flockX = parseFloat(randomVariablesX[i]);
        var flockY = parseFloat(randomVariablesY[i]);
        var d = int(dist(mouseX + diam/2, mouseY + diam/2, flockX + diam/4, flockY + diam/4));
        if (d < 25) {
            calcAngle(flockX, flockY);
            var flockValues = (calcNewPos(flockX, flockY));
            flockX = flockValues[0];
            flockY = flockValues[1];
            //console.log(flockX, flockY);
        }
        flock += ellipse(flockX, flockY, diam/2, diam/2);
        randomVariablesX[i] = flockX;
        randomVariablesY[i] = flockY;
    }
}

function calcNewValues() {
    for (var i = 0; i < flockInput; i++) {
        randomVariablesX[i] = ((Math.random() * 799) + 1)
        randomVariablesY[i] = ((Math.random() * 399) + 1)
        //console.log(randomVariablesX, randomVariablesY);
    }
}

function calcVelocity() {
    //console.log(currPosX, prevPosX);
    veloctiy = Math.abs((currPosY - prevPosY)/(currPosX - prevPosX))
    //console.log(velocity);
}

function calcAngle(flockX, flockY) {
    flockAngle = Math.atan((mouseX - flockX)/(mouseY - flockY));
    dx = Math.sin(flockAngle);
    dy = Math.cos(flockAngle);
    if ((mouseY - flockY) < 0) {
        dy = 0 - dy;
        dx = 0 - dx;
    }
    //console.log(dx, dy);
}

function calcNewPos(flockX, flockY) {
    //console.log(flockX, flockY);
    //console.log(flockX - dx, flockY - dy);
    flockX -= dx;
    flockY -= dy;
    //console.log(flockX, flockY);
    return [flockX, flockY]
}

$('#flockInput').keyup( 
    function getFlockInput() {
        flockInput = parseInt($('#flockInput').val());
        console.log(flockInput);
    }
);