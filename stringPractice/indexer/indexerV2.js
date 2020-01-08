var wordArray;
var needSortBox = $("#sortingNeeded");


$('#indexButton').click(
    function(){
        wordArray = [];
        var userInput = $('#userInput').val().toLowerCase();
        var aNumber = singleLetterCounter("a",userInput);
        var eNumber = singleLetterCounter("e", userInput);
        var iNumber = singleLetterCounter("i", userInput);
        var oNumber = singleLetterCounter("o", userInput);
        var uNumber = singleLetterCounter("u", userInput);
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
        var needSort = needSortBox.prop("checked");
        displayIndex(needSort);
    }
);

function singleLetterCounter(vowel, sentence){
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
    var wordIndex = wordArray.findIndex(
            function(wordObject){
                return wordObject.wordName === word;
            }
        );
    if(wordIndex<0)
        wordArray.push({wordName:word,count:1});
    else
        wordArray[wordIndex].count++;
}

function displayIndex(needSort){
    if(needSort)
        wordArray.sort(
            function(a,b){
                if(a.count<b.count)
                    return 1;
                if(a.count>b.count)
                    return -1;
                return 0;
            }
        );
    var indexString = "";
    console.log(wordArray, wordArray.length);
    for(var i=0; i<wordArray.length; i++)
        indexString += 
            "<div class='indexItem'>" + 
                "<div class='word'>" + wordArray[i].wordName + "</div>" +
                "<div class='wordCount'>" + wordArray[i].count + "</div>" +
            "</div>";

    $('#indexResult').html(indexString);
    $('#indexResult').append(
        "<div class='indexItem totalNum'>" +
            "Num of different words:" +
            "<div class='count'>" + wordArray.length + "</div>" + 
        "</div>")
}