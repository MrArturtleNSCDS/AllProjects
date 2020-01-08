chooseNext();

$('#checkButton').click(
    function(){
        var a = $('#givenA').text();
        var b = $('#givenB').text();
        var operation = $('#operation').val();
        
        var correct = math.eval(a + operation + b);
        var userAns = $('#answer').val();
        
        if(correct == userAns){
            showMessage("CORRECT");
            updateStat('#numCorrect');
            chooseNext();
        }
        else{
            updateStat('#numIncorrect');
            showMessage("INCORRECT");
        }
        $('#answer').val("");
    }
);

function chooseNext(){
    var min = parseInt($('#min').val());
    var max = parseInt($('#max').val());
    
    $('#givenA').text(randomNumber(min,max));
    $('#givenB').text(randomNumber(min,max));
}

function randomNumber(min,max){
    var range = max-min;
    return Math.floor((Math.random() * range) + min);
}

function updateStat(statName){
    var currentNum = parseInt($(statName).text());
    currentNum++;
    $(statName).text(currentNum);
}

function showMessage(message){
    $('#status').text(message).fadeIn().delay(600).fadeOut();
}