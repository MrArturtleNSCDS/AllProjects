var active = true;
var valid = false;

$(document).keydown(function(e) {
    console.log(e.which);
    switch(e.which) {
        case 65: // a
            if(active && valid){
                $('#bulb1 img').attr("src","images/bulbOn.png");
                active = false;
            }
        break;

        case 83: // s
            if(active && valid){
                $('#bulb2 img').attr("src","images/bulbOn.png");
                active = false;
            }
        break;

        case 68: // d
            if(active && valid){
                $('#bulb3 img').attr("src","images/bulbOn.png");
                active = false;
            }
        break;

        case 70: // f
            if(active && valid){
                $('#bulb4 img').attr("src","images/bulbOn.png");
                active = false;
            }
        break;

        case 32: // space
            $('.bulb').attr("src","images/bulbOff.png")
            console.log("Reset"); 
            active = true;
        break;

        default:
    }

    if(e.which == 16){
        console.log("Go");
        valid = true;
    }

    //e.preventDefault(); // prevent the default action (scroll / move caret)*/
});

$(document).keyup(function(e) {
    if(e.which == 16){
        console.log("Need to wait");
        valid = false;
    }
});