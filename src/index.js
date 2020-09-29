
exports.min = function min (array) {
  if (array == undefined) return 0 ;
  if (array.length == 0) return 0 ;
  let m = array[0];
  for (let i=0; i<array.length; i++){
    if (array[i] < m) {
      m = array[i];
    }
  }
  return m;
}

exports.max = function max (array) {
  if (array == undefined) return 0 ;
  if (array.length == 0) return 0 ;
  let m = array[0];
  for (let i=0; i<array.length; i++){
    if (array[i] > m) {
      m = array[i];
    }
  }
  return m;
}

exports.avg = function avg (array) {
  if (array == undefined) return 0 ;
  if (array.length == 0) return 0 ;
  let m = 0;
  for (let i=0; i<array.length; i++){
    m += array[i];    
  }
  m /= array.length;
  return m;
}
