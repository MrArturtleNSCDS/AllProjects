console.info("script loaded");

var arr = [7,4,6,0,5,1,8,2,9,3];

function mergeSort(array){
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    console.log(left,right);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){
    let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  console.log("merging:",arr,left,right);

  return arr.concat(left.slice().concat(right.slice()));
}



console.log(mergeSort(arr));