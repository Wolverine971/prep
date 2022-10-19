const numbers = [23, 43, 656, 3, 54, 65, 44, 25, 65];

function selectionSort(array) {
    debugger
  const length = array.length;
  let smallest = 0;
  for (let i = 0; i < length; i++) {
    smallest = i;
    for (let j = i; j < length; j++) {
      if (array[smallest] > array[j]) {
        smallest = j;
      }
    }
    // swap numbers

    let temp = array[i];
    array[i] = array[smallest];
    array[smallest] = temp;
  }
}

selectionSort(numbers);
console.log(numbers)





// import sys 
// A = [64, 25, 12, 22, 11] 
  
// # Traverse through all array elements 
// for i in range(len(A)): 
      
//     # Find the minimum element in remaining  
//     # unsorted array 
//     min_idx = i 
//     for j in range(i+1, len(A)): 
//         if A[min_idx] > A[j]: 
//             min_idx = j 
              
//     # Swap the found minimum element with  
//     # the first element         
//     A[i], A[min_idx] = A[min_idx], A[i] 
  
// # Driver code to test above 
// print ("Sorted array") 
// for i in range(len(A)): 
//     print("%d" %A[i]),  