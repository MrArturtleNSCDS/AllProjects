$('.button').click(
    function(){
        var clickedBox = $(this).attr('button');
        var newColor = $('[color=' + clickedBox + ']').val();
        console.log(clickedBox + ' ' + newColor);
        $('[box=' + clickedBox + ']').css('background-color',newColor);
    }
);

