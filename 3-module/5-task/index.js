function getMinMax(str) {
  let resultArr = str
    .split(' ')
    .filter( item => Number.isFinite(+item))
    .sort( (a, b) => a - b );

  return resultObj = {
    min: Number(resultArr[0]),
    max: Number(resultArr[resultArr.length - 1]),
  }

}
