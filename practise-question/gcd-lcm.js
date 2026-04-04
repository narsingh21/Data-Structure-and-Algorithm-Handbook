// you are given an array X of n elements.FInd the minimum value A such that it is divisible by all the numbers in array X. Also, find the maixmum value B such that it divides all the nyber tn array X.
// Also, print  A raise to the power B, (AB), Since AB can be large, so print AB modulo 109+7

const gcdofArray = (arr) => {
  let a = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let b = arr[i];

    while (b !== 0) {
      [a, b] = [b, a % b];
    }
  }
  return a;
};

const lcmofArray = (arr) => {
  let lcm = Math.max(...arr);
  let i = 0;
  while (i < arr.length) {
    if (lcm % arr[i] === 0) {
      i++;
    } else {
      lcm++;
      i = 0;
    }
  }
  return lcm;
};

function solution(arr) {
  const gcd = gcdofArray(arr);
  const lcm = lcm(arr);
}
