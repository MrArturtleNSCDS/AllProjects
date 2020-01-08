var bulbsOn = 0;

$('.button').click(
    function(){
        var buttonOn = $(this).hasClass('on');
        var parent = $(this).closest('.bulbWrapper');
        
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
        
        var onOffButtonString = buttonOn?'On':'Off';
        var targetBulb = parent.length > 0?$('img', parent):$('img');
        
        targetBulb.attr('src','bulb' + onOffButtonString + '.png');
        
        updateEnvironment();
    }
);

function updateEnvironment(){
    console.log('bulbsOn:' + bulbsOn)
    
    if(bulbsOn === 0)
        $('body').css('background-color','#000');
    else if(bulbsOn === 1)
        $('body').css('background-color','#333');
    else if(bulbsOn === 2)
        $('body').css('background-color','#666');
    else
        $('body').css('background-color','#999');
}