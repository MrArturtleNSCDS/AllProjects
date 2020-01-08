

TweenMax.to('#bad',.1,{x:500,backgroundColor:'#f00',repeat:-1, yoyo:true})

$('#good').click(
    function(){
        alert("hello");
    }
);

$('#bad').click(
    function(){
        alert("explode bye");
    }
);