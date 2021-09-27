const fs = require("fs");

let fileContent = JSON.parse(fs.readFileSync("input.txt", "utf8"));
let result = [];

function getFiniteValue(obj) {
  getProp(obj);

  function getProp(object) {
    for (let key in object) {
      if (typeof object[key] === "object") {
        getProp(object[key]);
      } else {
        result.push(object[key]);
        console.log("Finite value: ", object[key]);
      }
    }
  }
}

getFiniteValue(fileContent);
fs.writeFileSync("output.txt", result.reduce((acc, curr) => {return acc + curr}).toString());