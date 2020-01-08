var wordArray;


$('#indexButton').click(
    function(){
        wordArray = [];
        var userInput = $('#userInput').val().toLowerCase();
        var aNumber = singleVowelCounter("a",userInput);
        var eNumber = singleVowelCounter("e", userInput);
        var iNumber = singleVowelCounter("i", userInput);
        var oNumber = singleVowelCounter("o", userInput);
        var uNumber = singleVowelCounter("u", userInput);
        var charNumber = countChars(userInput);
        var vowelCount = vowelCounter(userInput);
        var consCount = consCounter(userInput);
        var wordCount = countWords(userInput);
        //var wordIndex = indexer(userInput);
        $('#aCount').text(aNumber);
        $('#eCount').text(eNumber);
        $('#iCount').text(iNumber);
        $('#oCount').text(oNumber);
        $('#uCount').text(uNumber);
        $('#characterCount').text(charNumber);
        $('#vowelCount').text(vowelCount);
        $('#consCount').text(consCount);
        $('#wordCount').text(wordCount);
        displayIndex(true);
    }
);

function aCounter(sentence){
    var aNum = 0;
    var index = 0;
    while(index<sentence.length){
        if(sentence.charAt(index) == "a")
            aNum ++;
        index++;
    }

    return aNum;
}

function eCounter(sentence){
    var eNum = 0;
    var index = 0;
    while(index<sentence.length){
        if(sentence.charAt(index) == "e")
            eNum ++;
        index++;
    }

    return eNum;
}

function singleVowelCounter(vowel, sentence){
    var vNum = 0;
    for(i=0; i<sentence.length; i++){
        if(sentence.charAt(i) == vowel)
            vNum ++;
    }

    return vNum;
}

function countChars(sentence){
    return vowelCounter(sentence) + consCounter(sentence);
}

function vowelCounter(sentence){
    var vowels = "aeiou";
    var vowelCount = 0;
    for(var i=0; i<sentence.length; i++){
        var currentChar = sentence.charAt(i);
        if(vowels.indexOf(currentChar)>=0)
            vowelCount++;
    }
    return vowelCount;
}

function consCounter(sentence){
    var cons = "bcdfghjklmnpqrstvwxyz";
    var consCount = 0;
    for(var i=0; i<sentence.length; i++){
        var currentChar = sentence.charAt(i);
        if(cons.indexOf(currentChar)>=0)
            consCount++;
    }
    return consCount;
}

function isVowel(character){
    var vowels = "aeiou";
    if(character.length===0)
        return false;
    return vowels.indexOf(character)>=0;
}

function isConsonant(character){
    var consonant = "bcdfghjklmnpqrstvwxyz";
    if(character.length===0)
        return false;
    return consonant.indexOf(character)>=0;
}

function isAlpha(character){
    return isVowel(character) || isConsonant(character);
}

function countWords(sentence){
    var wordNum = 0;
    var index = 0;
    while(index<sentence.length){
        var beginWord = index;
        var endWord = beginWord;
        
        while(index<sentence.length && !isAlpha(sentence.charAt(index))){
            index++;
        }

        if(isAlpha(sentence.charAt(index))){
            beginWord = index;
            endWord = beginWord;
            
            while(index<sentence.length && isAlpha(sentence.charAt(index))){
                index++;
            }
            endWord = index;
            
            var currentWord = sentence.substring(beginWord,endWord);
            
            indexer(currentWord);
            wordNum++;
        }
    }
    return wordNum;
}

function indexer(word){
    console.log("indexer:" + word);
    var wordIndex = wordArray.indexOf(word);
    if(wordIndex<0)
        wordArray.push(word);
}

function displayIndex(needSort){
    if(needSort)
        wordArray.sort();
        
    var arrayString = "var vocabulary = [";
    for(var i=0; i<wordArray.length; i++)
        arrayString += '"' + wordArray[i] + '", ';
    arrayString = arrayString.substring(0,arrayString.length-2);
    arrayString += "];";
    $('#indexResult').html(arrayString);
    $('#indexResult').append(
        "<div class='indexItem totalNum'>" +
            "Num of different words:" +
            "<div class='count'>" + wordArray.length + "</div>" + 
        "</div>")
}