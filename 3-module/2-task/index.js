function filterRange(arr, a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return arr.filter(i => i >= min && i <= max);
}

