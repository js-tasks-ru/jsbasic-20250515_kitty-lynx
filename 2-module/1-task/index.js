function sumSalaries(salaries) {
  let sum = 0;
  for (let key in salaries) {
    const value = salaries[key];
    if (typeof value === 'number' && Number.isFinite(value)) {
      sum += value;
    }
  }
  return sum;
}