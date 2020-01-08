var imgArray = [];
var models = ["f12","huracan"];
var colors = ["Black","Blue","Gray","Green","Orange","Red","Teal","Yellow"];

$('select').change(
    function(){
        var which = $(this).attr("id");
        
        if(which == "model"){
            $('.title').text($("#model :selected").text());
            TweenMax.to("#car",2,{x:-850,ease:SlowMo.easeInOut,onComplete:fromRight});
        }
        else
            changeCars();
        
    }
);

preloadImages();

function preloadImages(){
    for(var m=0; m<models.length; m++){
        for(var c=0; c<colors.length; c++){
            var imageName = "cars/" + models[m]+colors[c]+".png";
            var newImage = new Image();
            newImage.src = imageName;
            imgArray.push(newImage);
        }
    }
    console.log(imgArray);
}

function changeCars(){
    var model = $("#model").val();
    var color = $("#color").val();
    $('img').attr("src","cars/" + model + color + ".png");
}

function fromRight(){
    changeCars();
    $("#car").css('transform','matrix(1,0,0,1,850,0)');
    TweenMax.to("#car",2,{x:0,ease:SlowMo.easeInOut});
}
