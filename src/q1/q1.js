const example = require("./q1data.json");

example.sort((a, b) => {
  if (a.isExpired && !b.isExpired) {
    return 1;
  }
  if (b.isExpired && !a.isExpired) {
    return -1;
  }
  return 0;
});

console.log(example);
