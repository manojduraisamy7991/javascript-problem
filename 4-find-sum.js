const num = 5;
function findSum(input) {
  let sumResult = 0;
  for (let i = 1; i <= input; i++) {
    sumResult = sumResult + i;
  }
  return sumResult;
}
console.log("sum result =", findSum(num));
