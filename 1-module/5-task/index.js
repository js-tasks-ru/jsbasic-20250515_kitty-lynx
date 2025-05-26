function truncate(str, maxlength) {

  if (typeof str !== 'string' || typeof maxlength !== 'number' || maxlength <= 0) {
    return str;
  }

  if (str.length <= maxlength) {
    return str;
  }

  return str.slice(0, maxlength - 1) + '…';
}
