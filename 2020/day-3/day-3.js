const treesNum = function (n) {
  let rows = 0;
  let trees = 0;
  for (let r = 0; r < n.length; r++) {
    let row = n[r];
    for (let i = 0; i < row.length; i++) {
      if (row[i] == "#") {
        trees++;
      }
    }
  }
  return trees;
};

module.exports = treesNum;
