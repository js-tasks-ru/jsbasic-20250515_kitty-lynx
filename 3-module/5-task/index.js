function getMinMax(str) {
  const items = str.split(' ');
  let min = Infinity;
  let max = -Infinity;

  for (const item of items) {
    const number = parseFloat(item);
    if (!isNaN(number)) {
      min = Math.min(min, number);
      max = Math.max(max, number);
    }
  }

  return { min, max };
}
