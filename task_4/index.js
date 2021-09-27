const fs = require("fs");

let numbersArr = fs.readFileSync("input1.txt", "utf8").split(",");
let fileContent = fs.readFileSync("input2.txt", "utf8").split(",");

function rangeFilter(arr, from, to) {
  let result = [];
  let start = arr.indexOf(from, 0);
  for (let i = start; i < arr.length; i++) {
    if (arr[i] != to) {
      result.push(arr[i]);
    } else {
      break;
    }
  }
  fs.writeFileSync("output.txt", result.join(","));
}

rangeFilter(numbersArr, fileContent[0], fileContent[1]);
