let arr = [1, 2, 3];
const number = 0;

function findElement(input, number) {
  let result = "not found";
  for (let i = 0; i < input.length; i++) {
    console.log("console1", input.indexOf(number));
    if (input.indexOf(number) !== -1) {
      result = "element exists";
    }
  }
  return result;
}
console.log("Element is ", findElement(arr, number));
