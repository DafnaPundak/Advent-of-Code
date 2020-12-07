const countValid = function (a) {
  let array = [];
  let numValid = 0;
  let firstPosition = 0;
  let secondPosition = 0;
  let letter = "";
  let password = "";

  for (let j = 0; j < a.length; j++) {
    array = a[j];
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "-") {
        firstPosition = Number(array.split("").splice(0, i).join(""));
        secondPosition = Number(
          array
            .split("")
            .splice(i + 1, 2)
            .join("")
        );
      }
      if (array[i] == ":") {
        letter = array[i - 1];
        password = array.split("").splice(i + 2);
      }
    }

    if (
      password[firstPosition - 1] == letter &&
      password[secondPosition - 1] != letter
    ) {
      numValid++;
    } else if (
      password[firstPosition - 1] != letter &&
      password[secondPosition - 1] == letter
    ) {
      numValid++;
    }
  }
  return numValid;
};

module.exports = countValid;
