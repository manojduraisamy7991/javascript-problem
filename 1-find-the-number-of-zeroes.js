const numbers = [0, 3, 0, 5, 5, 5, "0", 0];

function findZero(num) {
  let counts = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      counts++;
    }
  }
  return counts;
}

const result = findZero(numbers);
console.log("count of zero is " + result);