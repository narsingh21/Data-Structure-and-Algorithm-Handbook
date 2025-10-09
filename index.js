/* maximum water from the container */

// const hight = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// function containerWithMostWater() {
//   let left = 0,
//     right = hight.length - 1;
//   let contVol = 0;

//   while (left <= right) {
//     console.log(hight[left], hight[right]);
//     const greaterNumber = maxNumber(hight[left], hight[right]);
//     console.log(greaterNumber, 'greateNumber');
//     if (greaterNumber === hight[left]) {
//       if (contVol < hight[left] * (right - left)) {
//         contVol = hight[left] * (right - left);
//         right--;
//       }
//     } else {
//       if (contVol < hight[right] * (right - left)) {
//         contVol = hight[right] * (right - left);
//       }
//       if (left == 1) break;
//       left++;
//     }
//   }
//   console.log(contVol);
// }

// containerWithMostWater();

// function maxNumber(num1, num2) {
//   //   console.log(num1 - num2 >= 0);
//   if (num1 - num2 >= 0) {
//     return num1;
//   }
//   return num2;
// }

// console.log(maxNumber(3, 4));

const reverse = (str) => {
  return str.split('').reverse().join();
};
console.log(reverse('abs'));
