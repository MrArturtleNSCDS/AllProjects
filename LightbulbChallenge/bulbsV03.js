$('.button').click(
    function(){
        var buttonOn = $(this).hasClass('on');
        var parent = $(this).closest('.bulbWrapper');
        if(parent.length > 0){
            if(buttonOn)
                $('img', parent).attr('src','bulbOn.png');
            else
                $('img', parent).attr('src','bulbOff.png');
        }
        else
            if(buttonOn)
                $('img').attr('src','bulbOn.png');
            else
                $('img').attr('src','bulbOff.png');

    }
);