/*eslint-env jquery */
for(var r=5; r>=0; r--){
    for(var c=0; c<7; c++){
        $('.board').append("<div class='circle' r='" + r + "' c='" + c +"' clickable='yes'><div class='red token'></div><div class='yellow token'></div></div>");
    }
}


    var clicks=0;
    var columnPieces = [0,0,0,0,0,0,0];


$('.circle').click(
    function(){
       var clickable = $(this).attr('clickable');
       if (clickable==='yes') {
           //parseInt
           var c = $(this).attr('c');
            var r = columnPieces[c];
        
            if(clicks%2===1){
                $('.red', "[r=" + r + "][c=" + c + "]").slideDown();
            }
          
            else{
                $('.yellow', "[r=" + r + "][c=" + c + "]").slideDown();
            }
            console.log(clicks,r,c);
            clicks++;
            $("[r=" + r + "][c=" + c + "]").attr('clickable', 'no');
        }
        columnPieces[c]++;
});

