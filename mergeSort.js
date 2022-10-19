const dfdf = [23, 43, 656, 3, 54, 65, 44, 25];

function mergeSort(array) {
  debugger;
  if (array.length === 1) {
    return array;
  }

  // split array into left and right
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
 
  return merge(mergeSort(left), mergeSort(right));
}
function myMerge(left, right) {
  // do comparison
  const mergedArray = [];
  if (left.length >= right.length) {
    // left first
    left.forEach((e, i) => {
      if (!right[i]) {
        mergedArray.push(e);
      } else if (e >= right[i]) {
        mergedArray.push(right[i]);
        mergedArray.push(e);
      } else {
        mergedArray.push(e);
        mergedArray.push(right[i]);
      }
    });
  } else {
    // left first
    right.forEach((e, i) => {
      if (!left[i]) {
        mergedArray.push(e);
      } else if (e >= left[i]) {
        mergedArray.push(left[i]);
        mergedArray.push(e);
      } else {
        mergedArray.push(e);
        mergedArray.push(left[i]);
      }
    });
  }
  return mergedArray
}

function merge(left, right){
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(
        left.slice((leftIndex)).concat(right.slice(rightIndex))
        )
}


console.log(mergeSort(dfdf));
