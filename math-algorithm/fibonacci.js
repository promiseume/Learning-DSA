// Given the number 'n', find the first 'n' element of the Fibonacci sequence.
//The fibonacci sequence is a sequence in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

// Example fibonacci of 2 is [0, 1]
// Example fibonacci of 5 is [0, 1, 1, 2, 3]

function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  const value = [0, 1];
  for (let i = 2; i < n; i++) {
    value[i] = value[i - 1] + value[i - 2];
  }
  return value;
}

console.log(fibonacci(2)); // [0, 1]

//Since we know that a fibonacci sequence starts with 0 and 1, we can create an array that has the value of 0 and 1 as its first value then iterate through the array to get the next value by adding the previous two values. We can then return the array. The time complexity of this algorithm is O(n) since we are iterating through the array n times.

//Another method

function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
    const value = [0, 1];
    return fibonacci(n-1) + fibonacci(n-2);
}