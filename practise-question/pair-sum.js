// You are given an array/list ‘ARR’ consisting of ‘N’ distinct integers arranged in ascending order.
// You are also given an integer ‘TARGET’. Your task is to count all the distinct pairs in ‘ARR’ such that their sum is equal to ‘TARGET’.

const pairSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      count++; // found one valid pair
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return count;
};
