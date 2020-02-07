console.info("script loaded");

var arr = [4,6,3,4,5,1,8,3,9,3];

function mergeSort(array){
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    console.log(left,right);
    //return merge(mergeSort(left), mergeSort(right));
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
  return arr.concat(left.slice().concat(right.slice()));
}



mergeSort(arr);