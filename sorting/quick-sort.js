const quickSort = (arr) => {
                    if (arr.length<=1) return arr;





const pivotSort = (arr, pivot) => {
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...left, pivot, ...right];
};  


