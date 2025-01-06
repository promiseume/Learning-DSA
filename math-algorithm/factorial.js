//Given an integer 'n', find the factorial of that integer.
//In mathematics, the factorial of a non negaative integer 'n' is the product of all positive integers less than or equal to 'n'.

function factorial(n){
    let sum = 1;
    if(n === 0) return 0;
    if(n === 1) return sum;
    for(let i = 1; i <= n; i++){
        sum = sum * i
    }
    return sum
}