const poop = [23, 43, 656, 3, 54, 65, 44, 25, 65];

// function myInsertionSort(array) {
//   debugger;
//   const length = array.length;
//   const sortedArr = [array[0]];
//   for (let i = 0; i < length; i++) {
//     let current = array[i];
//     for (let j = 0; j < sortedArr.length; j++) {
//       if (sortedArr[j] <= current && sortedArr[j + 1] >= current) {
//         let temp = sortedArr[j + 1];
//       }
//     }
//     // swap numbers

//     let temp = array[i];
//     array[i] = array[smallest];
//     array[smallest] = temp;
//   }
// }

const preee = [23, 43, 656, 3, 54, 65, 44, 25, 65];
function insertionSort(array) {
  debugger;
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 0; j < i; j++) {
        if (array[i] >= array[j-1] && array[i] <= array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
}

insertionSort(preee);
console.log(preee);
