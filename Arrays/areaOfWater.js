// You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.
function maxwaterArea(arr) {
  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const minValue = Math.min(arr[i], arr[j]);
      const width = j - i;
      const area = minValue * width;
      console.log(area);
      maxArea = Math.max(maxArea, area);
    }
    return maxArea;
  }
}

const maxWaterAreaOptimized = (heights) => {
  let maxArea = 0,
    left = 0,
    right = heights.length - 1;

  while (left < right) {
    const length = Math.min(heights[left], heights[right]);
    const width = right - left;
    const currentArea = length * width;
    maxArea = Math.max(maxArea, currentArea);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

console.log(maxWaterAreaOptimized([7, 1, 2, 3, 9]));
