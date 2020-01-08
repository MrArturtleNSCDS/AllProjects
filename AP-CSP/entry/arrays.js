var arrayTest = [3,6,"hi","bye","t",2,9];

arrayToString(arrayTest);
arrayToString(iterSequence(3));
arrayToString(primeFactors(35));

function arrayToString(array){
    var arrayString = "";
    for(var i=0; i<array.length; i++)
        arrayString += "<div class='data'>" + array[i] + "</div>";
    $('body').append("<div class='table'>" + arrayString + "</div>");
}

function iterSequence(n){
    var sequenceArray = [n];
    while(n>1){
        if(n%2==0)
            n=n/2
        else
            n=3*n+1
        sequenceArray.push(n);
    }
    return sequenceArray;
}

function primeFactors(num){
    var allFactArray = factors(num);
    console.log(allFactArray);
    
    var primeFactArray = [];
    
    for (var i=0; i<allFactArray.length; i++){
        var currentFact = allFactArray[i];
        console.log("currentFact:" + currentFact);
        if(isPrime(currentFact))
            primeFactArray.push(currentFact);
    }

    return primeFactArray;
}

function factors(num){
    var factArray = [];
    for(var i=0; i<=Math.ceil(num/2); i++){
        if(num%i===0)
            factArray.push(i);
    }
    factArray.push(num);
    return factArray;
}

function isPrime(num){
    var factArray = factors(num);
    return factArray.length === 2;
}
