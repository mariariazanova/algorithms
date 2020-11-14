function find(array) {
  let obj = {};
  for (let i = 0; i < array.length; i +=1) {
    if (array[i] in obj) {
      obj[array[i]] +=1;
      } else {
      obj[array[i]] = 1;
    } 
  };
  return Object.keys(obj).filter(key => obj[key]%2 == 1);
}
