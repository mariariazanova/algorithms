function find0(array) {
  let result = [];
  result[0] = 0;
  for (let i = 1; i < array.length; i +=1) {
    result[i] = (array[i] == 0 && array[i-1] == 0)
                ? (result[i-1] + 1)
                : 0
  }
  let maxLength = Math.max.apply({}, result);
  let end = result.indexOf(maxLength);
  let start = end - maxLength;
  return [start, end];
}
