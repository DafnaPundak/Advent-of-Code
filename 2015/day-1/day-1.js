var day_1 = function (s) {
  let sArray = s.split("");
  let floor = 0;

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] == "(") {
      floor += 1;
    } else if (sArray[i] == ")") {
      floor += -1;
    }
  }
  return floor;
};

module.exports = day_1;
