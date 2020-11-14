function factorial(n) {
  if (n > 1) {
      let result = 1;
      for (let i = 2; i <= n; i +=1) {
       result = result * i;
      }
      return result;
   } else {
    return 1;
  }
}
