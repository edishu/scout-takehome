const example = require("./q2data.json");

const appendToObject = (str, objToappendTo) => {
  if (str === "") {
    return;
  }
  const attributes = str.split(".");
  if (objToappendTo[attributes[0]] === undefined) {
    objToappendTo[attributes[0]] = {};
  }
  appendToObject(attributes.slice(1).join("."), objToappendTo[attributes[0]]);
};

const getNestedTree = (data) => {
  const rootObject = {};
  data.forEach((str) => {
    appendToObject(str, rootObject);
  });
  return rootObject;
};

console.log(getNestedTree(example));
