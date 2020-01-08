$('.on').click(
    function(){
        var parent = $(this).closest('.bulbWrapper');
        $('img', parent).attr('src','bulbOn.png');
    }
);

$('.off').click(
    function(){
        var parent = $(this).closest('.bulbWrapper');
        $('img', parent).attr('src','bulbOff.png');
    }
);

$('#bigButtonWrapper .on').click(
    function(){
        $('img').attr('src','bulbOn.png');
    }
);

$('#bigButtonWrapper .off').click(
    function(){
        $('img').attr('src','bulbOff.png');
    }
);