$('#click').click(
    function(){
        alert("Hello");
    }
);

$('#clack').click(
    function(){
        alert("Bye");
    }
);

TweenMax.to('#click',1,{x:400,backgroundColor:'aqua',repeat:-1,yoyo:true});