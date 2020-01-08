var mainCanvas;
var mainPencil;


init();

function init(){
    mainCanvas = document.getElementById("main");
    mainPencil = mainCanvas.getContext("2d");
    mainPencil.fillStyle = "#000";
    mainPencil.fillRect(2,2,25,25);
}