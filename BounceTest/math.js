function testArray(array){
    var frequencies = [];
    
    for(var i=0; i<array.length; i++){
        var numIndex = frequencies.findIndex(
            function(numObject){
                return numObject.num === array[i];
            }
        );
        if(numIndex<0)
            frequencies.push({num:array[i],firstIndex:i,secondIndex:-1});
        else if(frequencies[numIndex].secondIndex<0){
            frequencies[numIndex].secondIndex=i;
        }
            
    }
    if(frequencies.length == array.length)
        return -1;
    
    var minDiff;
    var firstRepeat=-1;
    var repeatSecondIndex;
    var first=true;
    console.log(frequencies);
    for(var f=0;f<frequencies.length;f++){
        var currNumObj = frequencies[f];
        if(currNumObj.secondIndex>=0){
            var currDiff = currNumObj.secondIndex-currNumObj.firstIndex;
            console.log("currDiff:" + currDiff);
            console.log("secondIndexes:" + currNumObj.secondIndex + " : " + repeatSecondIndex);
            if(first || currDiff<minDiff && currNumObj.secondIndex<repeatSecondIndex){
                first=false;
                minDiff=currDiff;
                firstRepeat=currNumObj.num;
                repeatSecondIndex=currNumObj.secondIndex;
                console.log("minDiff:" + minDiff + " number:" + firstRepeat);
            }
        }
    }
    return firstRepeat;
}

console.log(testArray([2,1,3,5,3,2]));

