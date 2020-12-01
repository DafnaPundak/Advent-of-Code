const day_1 = function (array) {
  let multi = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] == 2020) {
        // return [array[i], array[j]];
        multi = array[i] * array[j];
        return multi;
      }
    }
  }
};

module.exports = day_1;
