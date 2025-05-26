function checkSpam(str) {
  if (typeof str !== 'string') return false
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
}
