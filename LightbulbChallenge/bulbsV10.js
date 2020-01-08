var bulbsOn = 0;

$('.button').click(
    function(){
        var buttonOn = $(this).hasClass('on');
        var parent = $(this).closest('.bulbWrapper');
        
        updateBulbStatus(buttonOn,parent);
        
        var onOffButtonString = buttonOn?'On':'Off';
        var targetBulb = parent.length > 0?$('img', parent):$('img');
        
        targetBulb.attr('src','bulb' + onOffButtonString + '.png');
        updateEnvironment();
    }
);

function updateBulbStatus(buttonOn,parent){
    if(parent.length === 0){
        if(buttonOn)
            bulbsOn = 3;
        else
            bulbsOn = 0;
    }
    else{
        var isBulbOn = $('img', parent).attr('src').indexOf('On');
        if(buttonOn && isBulbOn<0)
            bulbsOn++;
        if(!buttonOn && isBulbOn>=0)
            bulbsOn--;
    }
}

function updateEnvironment(){
    var colorString = '#' + (bulbsOn*2) + (bulbsOn*2) + (bulbsOn*2);
    $('body').css('background-color', colorString);
}