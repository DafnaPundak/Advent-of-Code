const day_1_part2 = function (array) {
  let multi = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      for (let o = 2; o < array.length; o++) {
        if (array[i] + array[j] + array[o] == 2020) {
        //   return [array[i], array[j], array[o]];
          multi = array[i] * array[j] * array[o];
          return multi;
        }
      }
    }
  }
};

module.exports = day_1_part2;
