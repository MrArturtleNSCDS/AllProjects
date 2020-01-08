var sideArray = [0,0,0];
var aSide = $('#a');
var bSide = $('#b');
var cSide = $('#c');
var sigFigBox = $('#sigFig');

$('input').prop('readonly',true);

$('input').keyup(
    function(){
        var sideValue = $(this).val();
        var side = $(this).attr('side');
        sideArray[side] = sideValue;
        findPythagorean();
    }
);

$('[type=radio]').change(
    function(){
        $('input').prop('readonly',false);
        $(this).prev().prop('readonly', true);
    }
)

function findPythagorean(){
    var locked = parseInt($('input:radio:checked').val());
    console.log(locked);
    var sigFigs = sigFigBox.val();
    switch(locked){
        case 0: aSide.val(pythagorean(false,sideArray[1],sideArray[2],sigFigs));
            break;
        case 1: bSide.val(pythagorean(sideArray[0],false,sideArray[2],sigFigs));
            break;
        default: cSide.val(pythagorean(sideArray[0],sideArray[1],false,sigFigs));
    }
}


function pythagorean(a,b,c,sigFigs){
    console.log(a,b,c);
    var multiplier = Math.pow(10,sigFigs);
    var answer;
    if(!a)
        answer = Math.sqrt(c*c-b*b);
    if(!b)
        answer = Math.sqrt(c*c-a*a);
    if(!c)
        answer = Math.sqrt(a*a+b*b);
    return Math.round(answer*multiplier)/multiplier;
}