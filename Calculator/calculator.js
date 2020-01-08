var angleScreen = $('#angleScreen');
var xScreen = $('#xScreen');
var yScreen = $('#yScreen');
var radiusScreen = $('#radiusScreen');
var answerScreen = $('#resultCoords');

$('button').click(
    function(){
        var angle = parseInt(angleScreen.val());
        var xCoord = parseInt(xScreen.val());
        var yCoord = parseInt(yScreen.val());
        var radius = parseInt(radiusScreen.val());
        
        console.log(toRadians(xCoord));
        console.log(toRadians(yCoord));
        
        var xAnswer = Math.round(Math.cos(toRadians(angle))*radius+xCoord);
        var yAnswer = Math.round(Math.sin(toRadians(angle))*radius+yCoord);
        
        answerScreen.val("(" + xAnswer + "," + yAnswer + ")");
    }
);

function toRadians (angle) {
  return angle * (Math.PI / 180);
}