// Given an array of integers, return the indices of the two numbers that add up to a given target.
function findSum(arr,target){
    const hashMap = {};
    for(let i = 0; i < arr.length; i++){
        const currentValue = hashMap[arr[i]];
        if(currentValue >= 0){
            return [currentValue, i]
        }
        else{
            const numberToFind = target - arr[i];
            hashMap[numberToFind] = i;
        }
    }
    return null
}