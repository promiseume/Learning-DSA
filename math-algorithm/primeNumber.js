// Given a natural number 'n', determine if the number is a prime or not
// A prime number is a number that is greater than 1 and can only be divided by one and itself

function primeNumber(n){
    if(n < 2){
        return false;
    }``
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false
        }
    }
    return true;
}