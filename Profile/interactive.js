$('.button').click(
    function(){
        var parent = $(this).closest('.favoriteContainer');
        var imgSrc = $(this).attr('src');
        $('img',parent).attr('src','images/' + imgSrc);
        $('.contentTitle',parent).text($(this).text());
    }
);