const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12398710#overview
function myBubbleSort(array) {
    debugger
    let swaps = 0
    let sorted = false;
    let start = 0
    while(!sorted){
        if(array[start] && array[start] > array[start + 1]){
            let temp = array[start]
            array[start] = array[start + 1]
            array[start + 1] = temp
            start += 1
            swaps += 1
        }
        else if(array[start] <= array[start + 1] && start === array.length - 1){
            sorted = true
        } else if(start === array.length){
            start = 0
        } else {
            start += 1
        }
    }
    console.log(array)

}

myBubbleSort(numbers);
console.log(numbers);
// O1

const numbers = [99, 434, 45, 22, 66, 8, 435, 4]
function bubbleSort(array){
    const length = array.length
    for(let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if (array[j] > array[j + 1] ){
                // swap numbers
                let temp = array[j];
                array[j]= array[j+1];
                array[j+1] = temp
            }
        }
    }

}

bubbleSort(numbers);
console.log(numbers);