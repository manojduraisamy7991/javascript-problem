const input = [1, 2, 3, 6, 0, 0, 0, 0, 0];

function findZeros(list) {
  let zerosCount = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 0) zerosCount++;
  }
  return zerosCount;
}
console.log("zeros count - ", findZeros(input));
