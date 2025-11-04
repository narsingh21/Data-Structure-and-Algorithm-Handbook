const getDigits = (num) => {
  if (num == 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
};

const getMaxDigit = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, getDigits(arr[i]));
  }
  return max;
};

const getBucketNo = (num, digitIndex) => {
  return Math.floor(num / Math.pow(10, digitIndex)) % 10;
};

const redixSort = (arr) => {
  const maxNum = getMaxDigit(arr);
  for (let i = 0; i < maxNum; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const bucketNo = getBucketNo(arr[j], i);
      buckets[bucketNo].push(arr[j]);
    }

    arr = [].concat(...buckets);
  }
  return arr;
};

console.log(redixSort([333, 5678905, 5678901, 34]));
