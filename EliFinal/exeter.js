$('.button').click(
    function(){
        var memberName = $(this).text();
        var instrument = $(this).attr('id');
        var textToDisplay = $('[instrument=' + instrument + ']').text();
        console.log(textToDisplay);
        $('#memberTitle').text(memberName);
        $('#memberSubTitle').text(instrument);
        $('#bandPic').css('background-image','url(images/' + instrument + '.jpg)')
        $('#memberInfoBox').text(textToDisplay);
    }
);