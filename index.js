function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0
  array.forEach((item) => {
    if (typeof item === 'number') {
      sum += item;
    } else if (item instanceof Array) {
      sum += sumItems(item);
    }
  })
  return sum;
}

module.exports = sumItems;