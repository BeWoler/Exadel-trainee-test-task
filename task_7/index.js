const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8").split(",");
console.log(fileContent);

function posOrNegArr(arr) {
  let positiveNumbers = [];
  let negativeNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? negativeNumbers.push(arr[i]) : positiveNumbers.push(arr[i]);
  }
  fs.writeFileSync("output1.txt", positiveNumbers.join(","));
  fs.writeFileSync("output2.txt", negativeNumbers.join(","));
}

posOrNegArr(fileContent);
