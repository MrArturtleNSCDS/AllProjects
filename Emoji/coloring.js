//Emoji

var palette = $("#colorPalette");
var clickedColor = "#000";
var clickedPupil = "";
var clickedMouth = "";

$(".colorBox").click(
    function(){
        clickedColor = $(this).css("background-color");
    }
);

$(".pupilImage").click(
    function(){
        clickedPupil = $(this).css("background-image");
        console.log(clickedPupil);
    }
);

$(".pupil").click(
    function(){
        $(this).css("background-image", clickedPupil);
    }
);

$(".mouthImage").click(
    function(){
        clickedMouth = $(this).css("background-image");
        $('#mouth').css("background-image", clickedMouth);
        console.log(clickedMouth);
    }
);

/*$("#mouth").click(
    function(){
        $(this).css("background-image", clickedMouth);
    }
);

/*$('.colorable').click(
    function(){
        $(this).css("background-color",clickedColor);
    }
);*/

TweenMax.to("#leftEye",2,{x:40,ease:SlowMo.ease,repeat:-1, yoyo:true});
TweenMax.to("#rightEye",1,{x:-40,ease:SlowMo.ease,repeat:-1, yoyo:true});

//TweenMax.to("#face",2,{rotation:360,repeat:-1, yoyo:true});

