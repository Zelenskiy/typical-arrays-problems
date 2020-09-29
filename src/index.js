
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
  let m = array[0];
  for (let i=0; i<array.length; i++){
    if (array[i] > m) {
      m = array[i];
    }
  }
  return m;
}

exports.avg = function avg (array) {
  let m = 0;
  for (let i=0; i<array.length; i++){
    m += array[i];    
  }
  m /= array.length;
  return m;
}
