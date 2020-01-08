for(var i = 10; i<0; i-=4)
    console.log(i);

/*var myArr=["r",2,"g",10,5,6,7];
var iterArray=[13,40,20,10,5,16,8,4,2,1];

toStringArray(iterArray);

function toStringArray(array){
    for(var i=0; i<array.length; i++)
        $('body').append("<div>" + array[i] + "</div>");
}

var array =[1,5,3,8,7];


for(var i = 0; i<array.length-1; i++)
    console.log(array[i]&&array[i+1]&&array[i]>array[i+1])
   
 $('#button').click(
    function(){
        var randNum = Math.floor(Math.random()*10);
        $('#result').append("<div>" + randNum + "</div>");
    }
 );*/

/*function luckyNumber(n){
    var stringDigits = n+"";
    console.log(stringDigits);
    var firstHalf = stringDigits.substring(0,stringDigits.length/2).split("").reduce(getSum);
    var secondHalf = stringDigits.substring(stringDigits.length/2).split("").reduce(getSum);
    console.log(firstHalf,secondHalf);
    return firstHalf === secondHalf; 
    
}

function getSum(total, num) {
    //console.log(num);
    return parseInt(total) + parseInt(num);
}

console.log(luckyNumber(3120));
console.log(luckyNumber(1320));
console.log(luckyNumber(4120));
console.log(luckyNumber(2343443431204737));

/*var allP = $('[r=1]');
console.log(allP.length);

console.log($('[p=1][r=1]').length);*/
/*

var a =  [-1, 150, 190, 170, -1, -1, 160, 180];


console.log(a);
console.log(sortByHeight(a));

function sortByHeight(a) {
    var treeLocations = [];
    for(var i=0; i<a.length; i++)
        if(a[i] === -1)
            treeLocations.push(i);
    console.log(treeLocations);
    
    a = mergeSort(a);
    a.splice(0,treeLocations.length);
    
    for(var t=0; t<treeLocations.length; t++)
        a.splice(treeLocations[t],0,-1);
    
    return a;
}


function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle); 
  const right = arr.slice(middle); 

  return merge(mergeSort(left),mergeSort(right));
}

function merge (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}*/

