$('button').click(
    function(){
        var term = parseInt($('input').val());
        console.log(fib(term));
    }
);

function fib(n){
    if(n>0)
        if(n==1 || n==2)
            return 1;
        else
            return fib(n-1) + fib(n-2)
    return 0
}