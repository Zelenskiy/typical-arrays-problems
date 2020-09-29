
exports.min = function min (array) {
  let m = array[0];
  for (let i=0; i<array.length; i++){
    if (array[i] < m) {
      m = array[i];
    }
  }
  return m;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
