const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");
let array = fileContent.split(",");

function writeSortedArr(arr) {
  fs.writeFileSync("output.txt", arr.sort((a, b) => b - a).join(','))
}

writeSortedArr(array);