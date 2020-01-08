$('.button').click(
    function(){
        var buttonOn = $(this).hasClass('on');
        var parent = $(this).closest('.bulbWrapper');
        
        var onOffButtonString;
        var targetBulb;
        
        if(buttonOn)
            onOffBulbString = 'On';
        else
            onOffBulbString = 'Off';
        
        if(parent.length > 0)
            targetBulb = $('img', parent);
        else
            targetBulb = $('img');
                
        targetBulb.attr('src','bulb' + onOffBulbString + '.png');
    }
);