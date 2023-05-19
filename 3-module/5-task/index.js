function getMinMax(str) {
  const symbolsArr = str.split('');
  const unitsArr = [];
  const unsortedtArr = [];

  let start = 0;
  let finish = 0;

  for (let i = 0; i < symbolsArr.length; i++) {
    if (symbolsArr[i] === ' '){
      finish = i;
      let unit = str.slice(start, finish).trim();
      if (Number.isFinite(+unit)) {
        unsortedtArr.push(+unit);
      }
      start = i;
    }
  }

  let lastUnit = str.slice(start).trim();
  if (Number.isFinite(+lastUnit)) {
    unsortedtArr.push(+lastUnit);
  }

  let sortedArr = unsortedtArr.sort( (a, b) => { return a - b; } );
  let result = {
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
  }

  return result;

}
