$('.button').click(
    function(){
        var buttonOn = $(this).hasClass('on');
        var parent = $(this).closest('.bulbWrapper');
        
        var onOffButtonString = buttonOn?'On':'Off';
        var targetBulb = parent.length > 0?$('img', parent):$('img');
        
        targetBulb.attr('src','bulb' + onOffButtonString + '.png');
    }
);