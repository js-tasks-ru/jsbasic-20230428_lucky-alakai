function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    if (typeof salaries[key] === 'number' && Number.isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}
