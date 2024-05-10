const str = "zoom";
function reverseFunction(string) {
  const strToArray = string.split("");
  let result = [];
  for (var i = 0; i < strToArray.length; i++) {
    result.push(str[strToArray.length - i - 1]);
  }
  return result.join("");
}
console.log(reverseFunction(str), "result");
