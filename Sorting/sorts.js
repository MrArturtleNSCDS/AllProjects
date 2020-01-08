var numArray = []; //[1, 14, 5, 4, 8, 7, 2, 9, 12, 13, 11, 10, 6, 0, 3];
var inversions = 0;

for(var i=1; i<=100; i++)
    numArray.push(i);
    
for(var i=0; i<5; i++)
    numArray.sort(function(a, b){return 0.5 - Math.random();});

//var length = numArray.length;
var bubblePasses = 0;
var selectionPasses = 0;
var quickPasses = 0;
//var swapped = true;

displayBars(numArray,"#bubbleDisplay");
displayBars(numArray,"#selectionDisplay");
displayBars(numArray,"#quickDisplay");

bubbleSort(numArray);
selectionSort(numArray);
quickSort(numArray);

function bubbleSort(arrayToSort){
    var arrayToSort = deepCopy(arrayToSort);
    setTimeout(doBubbleSort,100,arrayToSort,0,false);
}

function doBubbleSort(arrayToSort,index,swapped){
    bubblePasses++;
    $('#bubblePasses').text(bubblePasses);
    if(index<arrayToSort.length-1){
        $(".a","#bubbleDisplay").removeClass("a");
        $(".b","#bubbleDisplay").removeClass("b");
        
        var aBar = $("[bar=" + index + "]","#bubbleDisplay");
        var bBar = $("[bar=" + (index+1) + "]","#bubbleDisplay");
        
        aBar.addClass("a");
        bBar.addClass("b");
        
        if(arrayToSort[index]>arrayToSort[index+1]){
            swapped = true;
            inversions ++;
            console.log(inversions);
            setTimeout(swap,100,arrayToSort,index,index+1,"#bubbleDisplay");
        }
        
        index++;
        setTimeout(doBubbleSort,100,arrayToSort,index,swapped);
    }
    else{
        //console.log(swapped);
        if(swapped){
            setTimeout(doBubbleSort,100,arrayToSort,0,false);
        }
        else{
            $(".a","#bubbleDisplay").removeClass("a");
            $(".b","#bubbleDisplay").removeClass("b");
        }
    }
}

function selectionSort(arrayToSort){
    var arrayToSort = deepCopy(arrayToSort);
    setTimeout(doSelectionSort,100,arrayToSort,0);
}

function doSelectionSort(arrayToSort,index){
    if(index<arrayToSort.length){
        var minValue = arrayToSort[index];
        //var searchIndex = index + 1;
        
        $(".a","#selectionDisplay").removeClass("a");
        $(".b","#selectionDisplay").removeClass("b");
        
        var aBar = $("[bar=" + index + "]","#selectionDisplay");
        aBar.addClass("a");
        
        nextSpot(arrayToSort,index,index,minValue,index);
    }
    else{
        $(".a","#selectionDisplay").removeClass("a");
        $(".b","#selectionDisplay").removeClass("b");
    }

}

function nextSpot(array,toSwap,index,minValue,finalIndex){
    //var searchIndex = i;
    //console.log("current index:" + index)
    $(".b","#selectionDisplay").removeClass("b");
    var bBar = $("[bar=" + (finalIndex) + "]","#selectionDisplay");
    bBar.addClass("b");
    
    $(".temp","#selectionDisplay").removeClass("temp");
    var cBar = $("[bar=" + (index+1) + "]","#selectionDisplay");
    cBar.addClass("temp");
    
    selectionPasses++;
    $('#selectionPasses').text(selectionPasses);
    
    if(index<array.length){
        if(minValue>array[index+1]){
            minValue = array[index+1];
            finalIndex = index+1;
        }
        setTimeout(nextSpot, 200, array,toSwap, index+1, minValue, finalIndex);        
    }
    else
        afterFoundSpot(array,toSwap,finalIndex);
}

function afterFoundSpot(array,originalIndex,foundIndex){
    //console.log(originalIndex + " switch with " + foundIndex);
    swap(array,originalIndex,foundIndex,"#selectionDisplay");
    setTimeout(doSelectionSort,100,array,originalIndex+1);
}

function quickSort(arrayToSort){
    var arrayToSort = deepCopy(arrayToSort);
    console.log("original:", arrayToSort);
    setTimeout(doQuickSort,100,arrayToSort,0,arrayToSort.length-1);
}

function doQuickSort(array,left,right){
    console.log("left:" + left + " right:" + right);
    if(left<right){
        quickPasses++;
        $('#quickPasses').text(quickPasses);
        console.log(array + " passes:" + quickPasses);
        var pivotIndex = Math.round((left+right)/2);
        var pivot = array[pivotIndex];
        var index = partition(array,0,array.length-1,pivot);
        console.log(pivotIndex + " " + pivot + " " + index);
        setTimeout(doQuickSort,2000,array,left,index-1);
        setTimeout(doQuickSort,2000,array,index,right);
    }
}

function partition(array,left,right,pivot){
    console.log(left + " " + right + " " + pivot);
    while(left<right){
        //console.log(array);
        while(array[left]<pivot)
            left++;
        while(array[right]>pivot)
            right--;
        console.log(left + " " + right);
        if(left<right){
            swap(array,left,right,"#quickDisplay");
            left++;
            right--;
        }
    }
    return left;
}

function swap(array,a,b,display){
    //console.log(array);
    
    var temp = array[a];
    array[a] = array[b];
    array[b]=temp;
    
    //console.log(array);
    
    displayBars(array,display);
    
    var aBar = $("[bar=" + a + "]",display);
    var bBar = $("[bar=" + b + "]",display);
    
    aBar.addClass("a");
    bBar.addClass("b");
}

function deepCopy(arrayToCopy){
    var newArray = [];
    for(var i=0; i<arrayToCopy.length; i++)
        newArray.push(arrayToCopy[i]);
    return newArray;
}


function displayBars(arrayToDisplay, whereToDisplay){
    var length = arrayToDisplay.length;
    var allBarsString = "";
    for(var i=0; i<length; i++){
        var height = arrayToDisplay[i] * 2;
        allBarsString += "<div class='bar' bar='" + i + "' style='height:" + height + "px' height='" + height + "'></div>";
    }
    $(whereToDisplay).html(allBarsString);
}