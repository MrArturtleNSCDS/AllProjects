/*eslint-env jquery */

var vowels;
var randomLetter;
var consonants;
var selectedWords;
var firstQuestion;
var typeQuestion;
var guesses;

init();

function init(){
    vowels = ["A", "E", "I", "O", "U", "Y"];
    consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", 
        "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
    $('#startWrapper').hide();
    $('#freeResponseWrapper').show();
    firstQuestion = true;
    guesses = 0;
    $('#numGuesses').text("");
    $('#userInput').val("");
    $('#yesBox').text("");
    $('#noBox').text("");
    
    selectedWords = [];
    askQuestion();
}

function askQuestion(){
    if(firstQuestion){
        $("#box").html("How many characters are in your word? Your words can only contain up to 12 Characters");
        
    }
    else{
        guesses++;
        $('#numGuesses').text(guesses);
        if(selectedWords.length===0){
            $("#box").html("I'm out of words!");
            
        }
        else if(selectedWords.length===1){
            typeQuestion = 2;
            $("#box").html("Is your word " + selectedWords[0] + "?");
        }
        else if(vowels.length>0){
            typeQuestion = 0;
            //console.log("type:" + typeQuestion);
            randomLetter = pickrandomLetter(vowels);
            $("#box").html("Does your word <span class='highlight'>contain</span> the letter " + randomLetter);
        }
        else{
            var lettersLeft = selectedWords.join("");
            //console.log(lettersLeft,selectedWords);
            //console.log("lettersLeft:" + lettersLeft);
            //console.log("consonantsLeft:" + consonants);
            var tempArr = [];
            for(var i=0; i<consonants.length; i++){
                var currConsonant = consonants[i].toLowerCase();
                //console.log(currConsonant);
                if(lettersLeft.indexOf(currConsonant)>=0)
                    tempArr.push(currConsonant.toUpperCase());
            }

            consonants = tempArr;
            //console.log(consonants);
            
            if(consonants.length>0){
                //firstConsonant = false;
                typeQuestion = 0;
                randomLetter = pickrandomLetter(consonants);
                $("#box").html("Does your word <span class='highlight'>contain</span> the letter " + randomLetter);
            }
            else{
                typeQuestion = 1;
                randomLetter = selectedWords[0].charAt(0).toUpperCase();
                $("#box").html(
                    "Does your word <span class='highlight'>start with</span> the letter " + 
                    randomLetter + "?");
            }

        }
    }
}

$('#submit').click(
    function(){
        var userInput = $("#userInput").val();
        var wordLength = parseInt(userInput);
        if(0<wordLength && wordLength<=12){
            firstQuestion = false;
            $('#freeResponseWrapper').fadeOut(100,function(){$('#choiceWrapper').fadeIn(100);});
            keepWordsLength(wordLength);
            askQuestion();
        }
        else{
            $("#box").html("<div class='error'>ERROR: Check your length.</div>");
            setTimeout(askQuestion,3000);
        }
    }
);

function pickrandomLetter(letterArr){
    var randomLetterIndex = Math.floor(Math.random()*letterArr.length);
    var randomLetter = letterArr[randomLetterIndex];
    letterArr.splice(randomLetterIndex,1);
    console.log(letterArr);
    return randomLetter;
}

$('.choiceButton').click(
    function(){
        var isYes = $(this).attr('id') == "yes";
        //console.log("type:" + typeQuestion);
        switch(typeQuestion){
            case 0: 
                removeWordsByLetter(randomLetter,isYes);
                askQuestion();
                break;
            case 1: 
                removeWordByIndex(isYes);
                askQuestion();
                break;
            default: checkAnswer(isYes);
        }
    }
);

$('#restart').click(
    function(){
        init();
    }
);

function keepWordsLength(length){
    //console.log(length);
    for(var i=0; i<vocabulary.length; i++){
        if(vocabulary[i].length === length)
            selectedWords.push(vocabulary[i]);
    }
    console.log(selectedWords);
}

function removeWordsByLetter(letter,doHave){
    letter = letter.toLowerCase();
    var letterBox = doHave?"#yesBox":"#noBox";
    //console.log(letter + " " + doHave);
    var tempArr = [];
    //var keep=doHave?1:-1;
        
    for(var i=0; i<selectedWords.length; i++){
        if(doHave){
            if(selectedWords[i].indexOf(letter)>=0){
                tempArr.push(selectedWords[i]);
            }
        }
        else
            if(selectedWords[i].indexOf(letter)<0){
                tempArr.push(selectedWords[i]);
            }
        
    }
    
    $(letterBox).append("<div class='guessedLetter'>" + randomLetter + "</div>");
    
    selectedWords = tempArr;
    //console.log("byLetter:");
    //console.log(selectedWords);
}

function removeWordByIndex(doHave){
    if(doHave)
        selectedWords.splice(1,1);
    else
        selectedWords.splice(0,1);
    //console.log("byIndex:");
    //console.log(selectedWords);
}

function checkAnswer(doesStart){
    if(doesStart)
        $("#box").html("Awesome!");
    else
        $("#box").html("Maybe next time!");
    $('#choiceWrapper').fadeOut(200,function(){$('#startWrapper').fadeIn()});
}