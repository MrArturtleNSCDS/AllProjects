$('.button').click(
    function(){
        var n = parseInt($('input').val());
        var terms = findTerms(n);
        displayTerms(terms);
    }
);

function findTerms(n){
    var termArray = [n];
     while(n>1){
        if(n%2==0)
            n=n/2
        else
            n=3*n+1
        termArray.push(n);
    }
    return termArray;
}

function displayTerms(termArray){
    var termString = "";
    for(var i=0; i<termArray.length; i++)
        termString += "<div class='term'>" + termArray[i] +"</div>";
    $('#result').html(termString);
}

function arrayToString(array){
    var arrayString = ""; //array[0];
    var highest = Math.max(...array);
    
    console.log("highest:" + highest)
    
    for(var i=0; i<array.length; i++){
        var currentTerm = array[i];
        var currentTermString = 
            currentTerm == highest?
                ", <div class='highestTerm'>" + currentTerm + "</div>":
                ", " + currentTerm;
        arrayString += currentTermString;
    }

    return arrayString.substring(2);
}

function findMultipleTerms(){
    var multTermsString = "";
    for(var i=1; i<=1000; i++){
        var currNTerms = findTerms(i);
        multTermsString += 
            "<div class='tableResultsLine'>" +
                "<div class='tableResultsN'>" + i + "</div>" +
                "<div class='tableResultsNum'>" + currNTerms.length + "</div>" +
                "<div class='tableResultsTerms'>" + arrayToString(currNTerms) + "</div>" +
            "</div>";
    }
    $('#tableResultWrapper').html(multTermsString);
}

findMultipleTerms();

