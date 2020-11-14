function find(array) {
  let result = [];
  for (let i = 0; i < array.length; i +=1) {
    let x = array[i];
    let ar = array.slice(0);
    ar.splice(i, 1); // вырезает i элемент и возвращает его
    if (ar.indexOf(x) === -1) {  // в оставшемся после вырезания массиве нет вырезанной цифры
        result.push(x);
    };
  }  
   return result;
}
