var sideArray = [0,0,0];
var aSide = $('#a');
var bSide = $('#b');
var cSide = $('#c');

$('input').keyup(
    function(){
        var sideValue = $(this).val();
        var side = parseInt($(this).attr('side'));
        sideArray[side] = sideValue;
        findPythagorean(side);
    }
);

function findPythagorean(side){
    switch(side){
        case 0: cSide.val(pythagorean(sideArray[0],sideArray[1],false));
            break;
        case 1: cSide.val(pythagorean(sideArray[0],sideArray[1],false));
            break;
        default: bSide.val(pythagorean(sideArray[0],false,sideArray[2]));
    }
}


function pythagorean(a,b,c){
    console.log(a,b,c);
    if(!a)
        return Math.sqrt(c*c-b*b);
    if(!b)
        return Math.sqrt(c*c-a*a);
    return Math.sqrt(a*a+b*b);
}