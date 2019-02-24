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
iterateFib(20)

// O(log n)
function powersOf2(n){
    if(n < 1){
        return 0
    }
    else if(n == 1){
        console.log(1)
        return 1
    }
    else{
        let prev = powersIf2(n/2)
        let curr = prev * 2
        console.log(curr)
        return curr
    }
}