$('.button').click(
    function(){
        var n = parseInt($('input').val());
        var termString = "<div class='term'>" + n +"</div>";
        
        while(n>1){
            if(n%2==0)
                n=n/2
            else
                n=3*n+1
            termString += "<div class='term'>" + n +"</div>";
        }
        $('#result').html(termString);
    }
);