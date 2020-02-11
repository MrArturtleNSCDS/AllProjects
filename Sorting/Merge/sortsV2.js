console.info("script loaded");

var arr = [7,4,6,0,5,1,8,2,9,3];

function mergeSort(array){
    console.log(array);
    if(array.length < 2)
        return array;

    let middle = Math.floor(array.length/2);
    let left = array.slice(0,middle);
    let right = array.slice(middle);

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left, right){
    console.log ("merging:",left, right);
    let merged = [];
    while(left.length && right.length){
        if(left[0]<right[0])
            merged.push(left.shift(0));
        else
            merged.push(right.shift(0));
    }

    return merged.concat(left.concat(right));
}

console.log(mergeSort(arr));