// this chunk prints all Fibonacci numbers from 0 to n
// this stores previously computed vals in an array, if 
// val has already been computed it returns the array

//memoization pg 54
// function allFib(n){
// 	let memo = [n + 1];
// 	for(var i = 0; i < n; i++){
// 	console.log(i + ": " + fib(i, memo))
//     }
// }

// function fib(n, memo){
// 	if(n <= 0) return 0
// 	else if(n === 1) return 1
// 	else if (memo[n] > 0) return memo[n]
	
// memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// return memo[n]
// }

// allFib(14)



//recursive O(n)
let fibArray = []
function iterateFib(num, fib){
    if(num === 0){
        return fibArray.forEach(elem=>{
            console.log(elem)
        })
    }
    if(fib === 0 || fib == null){
        fibArray.push(0)
        return iterateFib(num -  1, 1)
    }
    else if(fib === 1 && fibArray.length < 3){
        fibArray.push(1)
        return iterateFib(num - 1, 1)
    }
    else{
        let newFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
        fibArray.push(newFib)
        return iterateFib(num - 1, newFib) 
    }
}
//iterateFib(20)

// O(log n)
function powersOf2(n){
    if(n < 1){
        return 0;
    }
    else if(n == 1){
        console.log(1);
        return 1;
    }
    else{
        let prev = powersOf2(n / 2);
        let curr = prev * 2;
        console.log(curr);
        return curr
    }
}
powersOf2(50)


// iterate through a matrix
// arr = [11 2 4
//     4 5 6
//     10 8 -12]
// O(n + m)
function diagonalDifference(arr) {
    console.log(arr)

    let size = arr.length
    console.log(size)
    let left = 0
    let right = 0

    for (var i = 0; i < size; i++) {
        //let j = i + 1
        left += arr[i][i]
    }
    for (var m = size; m > 0; m--) {
        let n = size
        let k = n - m
        let p = arr[k][m - 1]
        right += p
    }
    return Math.abs(left - right)
}



            // # # # # # 
            //  # # # # 
            //   # # # 
            //    # # 
            //     # 
function staircase(n) {
    let star = ''
    for (var i = 0; i < n + 1; i++){
        
        for (var j = 0; j < n; j++){
            if (i < j) {
                star = star.concat('#')
                star = star.concat(' ')
            }
            else {
                star = star.concat(' ')
            }
        }
        console.log(star)
        star = ''
    }
}


        //         #
        //        ##
        //       ###
        //      ####
        //     #####
        //    ######
function staircase(n) {
    let star = ''
    // first loop is for iterating n times
    // as i increases that is the amount of # 
    // that need to be on the next line
    for (var i = 1; i < n + 1; i++){
        // second loop iterates n times
        // and if the i, the number of # needed to be printed
        // is less than j the current iteration we add a space
        // as j decreases we know that when it is no longer greater than i
        // that is when we need to start adding # instead of spaces 
        for (var j = n; j > 0; j--){
            if (j > i) {
                star = star.concat(' ')
            }
            else {

                star = star.concat('#')
            }
        }
        console.log(star)
        star = ''
    }
}
// Find min and max of array of 4 numbers out of 5 numbers
// Complete the miniMaxSum function below.
// O(n + m)
function miniMaxSum(arr) {
    let all = 0
    let max = 0
    let min = 0

    arr.forEach(elem => {
        all += elem
        min += elem
    })
    arr.forEach(elem => {
        let allminus = all - elem
        // console.log(allminus)\
        // need both if statements because you could have a 
        // number that is both the max and the min
        // such as [5,5,5,5,5]
        if (allminus > max) {
            max = allminus
        }
        if (allminus < min) {
            min = allminus
        }
    })
    console.log(min + ' ' + max)
}

// O(n)
// only able to blow out tallest candle
// Complete the birthdayCakeCandles function below.// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let age = ar.length
    let tallest = 0
    let num = 0
    // need to reset tallest and num if current elem is greater than currentTallest

    ar.forEach(elem => {
        if (elem >= tallest) {
            if (elem == tallest) {
                num += 1   
            }
            else {
                num = 1
                tallest = elem
            }
        }
    })
    console.log(num)
    return num

}



/*
 * Complete the timeConversion function below.
 * Converts am/ pm time to military time
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    // if (-1 == s.indexOf('P')) {
    //     console.log(s.indexOf('P'))
    //     // slice(0, -2)
    //     return s
    // }
    // else {
    if (-1 !== s.indexOf('P')) {
        let split = s.slice(0, -2)
        split = split.split(':')
        let intToChange = 0
        if (parseInt(split[0]) === 12) {
            intToChange = 0
            split[0] = parseInt('12')
        }
        else {
            intToChange = parseInt(split[0])
            split[0] = 12 + intToChange
        }
        if (split[0].length == 1) {
            console.log('length = 1 ')
            split[0] = '0' + split[0]
        }
        split = split.join(':')
        // split = split.slice(0, -2)
        console.log(split)
        return split
    }
    else {
        let split = s.slice(0, -2)
        split = split.split(':')
        let intToChange = 0
        if (parseInt(split[0]) === 12) {
            intToChange = 0
            split[0] = '00'
        }
        else if (parseInt(split[0]) == '00') {
            split[0] = '00'
        }
        else {
            intToChange = parseInt(split[0])
            if (intToChange < 10) {
                intToChange = '0' + intToChange
            }
            split[0] = intToChange
        }
        if (split[0].length == 0) {
            split[0] = '0' + split[0]
        }
        split = split.join(':')
        return split
    }

}

// Complete the rotLeft function below.
function rotLeft(a, d) {

    // if (d > 0) {
    let newArr = a.slice(0, d)
    let leftOver = a.slice(d)
    console.log(newArr)
    console.log(leftOver)
    return leftOver.concat(newArr)
    // }
    // else {
    //     return 
    // }
}


// Complete the minimumBribes function below.
function minimumBribes(q) {
    //bubble sort
    //two swaps
    let mov = {}
    let temp = 0
    let count = 0
    let swapped
    do {
        swapped = false
        for (var i = 0; i < q.length; i++) {
            if (q[i] > q[i + 1]) {
                temp = q[i]
                q[i] = q[i + 1]
                q[i + 1] = temp
                //mov[q[i]] = (mov[q[i]] + 1) || 1
                mov[q[i + 1]] = (mov[q[i + 1]] + 1) || 1
                count += 1
                swapped = true
                //console.log('q[i]:' + q[i] + ' q[i+ 1]: ' + q[i+ 1])
            }
        }
    } while (swapped);
    //console.log(mov)
    let tooChaotic = false
    for (var key in mov) {
        if (mov[key] > 2) {
            tooChaotic = true
        }
    }
    if (tooChaotic) {
        console.log('Too chaotic')
        return 'Too chaotic'
    }
    else {
        console.log(count)
        return count
    }


}

function perm(s, b){
    console.log('here')
    let sarr = Array.from(s)
    var map = sarr.reduce((map, obj, index)=>{
        map[obj] = obj;
        return map;
    }, {})
    let barr = Array.from(b)
    let carr = new Map()
    let perms = []
    for(var i = 0; i < b.length; i++){
        if (carr.size == s.length){
            let word = Array.from(carr.keys()).join('')

            perms.push(word)
            carr.delete(carr.values().next().value)
        }
        let mapw = map[b[i]]
        let moop = carr.has(map[b[i]])
        if(mapw && moop){
            
            carr.set(map[b[i]], map[b[i]])
        }
        else{
            carr.clear()
        }
    }
    perms.forEach(elem=>{
        console.log(elem)
    })
}

perm('flor', 'floroormorestorepoorfrlolfolro')