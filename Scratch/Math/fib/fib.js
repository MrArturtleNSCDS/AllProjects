console.log('working');

function fib(n){
    if(n<=0)
        return 0;
    if(n==1 || n==2)
        return 1;
    var currFib = fib(n-1) + fib(n-2);
    //if(currFib%7==0)
        //allFibs.push(currFib);
    return currFib;
}

var factors = [];
for(t=2; t<=40; t++){
    //var allFibs = [];
    var divBy = [];
    for(f=1; f<=40; f++){
        currFib = fib(f);
        //allFibs.push({num:f,fib:currFib});
        if(currFib%t==0)
            divBy.push({num:f,fib:currFib});
    }
    console.log(t);
    //console.log(allFibs);
    console.log(divBy);
    var valid = true;
    if(divBy.length>0){
        var i = 0;
        var factor = divBy[0].num;
        while(i<divBy.length && valid){
            valid = divBy[i].num%factor==0;
            i++;
        }
    }
    else
        valid = false;

    if(valid)
        factors.push(factor);
    else
        factors.push('none');
}

console.log(factors);

// 1,1,2,3,5,8,13