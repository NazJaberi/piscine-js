const adder = (arr, initial = 0) => arr.reduce((sum, num) => sum + num, initial);

const sumOrMul = (arr, initial) => arr.reduce((result, num, index) => {
  if (index === 0 && initial === undefined) {
    return num;
  }
  return num % 2 === 0 ? result * num : result + num;
}, initial);

const funcExec = (arr, initial) => arr.reduce((result, func) => func(result), initial);