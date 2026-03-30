var moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

function bubbleSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== 'function') {
    let noSwap;

    for (let i = arr.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
  } else {
    for (let i = arr.length; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
  }
  return arr;
}

console.log(bubbleSort(moarKittyData, oldestToYoungest));
