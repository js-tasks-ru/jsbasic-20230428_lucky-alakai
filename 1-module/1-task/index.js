function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let temp = 1;
  for (i = 1; i < n; i++) {
    temp += temp * i;
  }
  return temp;
}
